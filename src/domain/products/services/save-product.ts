import { ProductsDto } from '../../../dto/products';
import { saveProductRepository } from '../repositories';
import { ProductOptionsDto } from '../../../dto/product-options';
import { saveProductOptionsService } from '../../product-options/services';

interface Props {
  product: ProductsDto;
  productOptions: ProductOptionsDto[];
}

interface Response {
  id: string;
}

const saveProductService = async ({
  product,
  productOptions,
}: Props): Promise<Response> => {
  const { id } = await saveProductRepository({ product });

  if (product.stock_type === 'CUSTOM') {
    await Promise.all(
      productOptions.map(async (prodOpt) => {
        await saveProductOptionsService({
          options: {
            content: prodOpt.content,
            headline: prodOpt.headline,
            product_id: id,
            stock: Number(prodOpt.stock),
          },
        });
      })
    );
  }

  return { id };
};

export default saveProductService;
