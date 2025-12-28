import VoucherDetailsPrimary from "@/components/sections/voucher-details/VoucherDetailsPrimary";
import VoucherDescriptionTab from "@/components/sections/sub-section/exam-voucher/VoucherDescriptionTab";

const VoucherDetailsMain = ({ id }) => {
  return (
    <>
      <VoucherDetailsPrimary id={id} />
      <VoucherDescriptionTab />
    </>
  );
};

export default VoucherDetailsMain;
