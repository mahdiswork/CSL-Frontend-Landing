import VoucherDetailsMain from "@/components/layout/main/VoucherDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import products from "@/../public/fakedata/products.json";
export const metadata = {
  title: "Voucher Details | CSL Training",
  description: "Voucher Details | CSL Training",
};
const Product_Details = async ({ params }) => {
  const { id } = params;
  const isExistProducts = products?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistProducts) {
    notFound();
  }
  return (
    <PageWrapper>
      <main>
        <VoucherDetailsMain id={params?.id} />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};
export async function generateStaticParams() {
  return products?.map(({ id }) => ({ id: id.toString() }));
}
export default Product_Details;
