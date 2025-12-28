import ExamVoucher from "@/components/layout/main/ExamVoucher";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "CSL Training | Exam Voucher",
  description: "CSL Training | Exam Voucher",
};

const Courses = async () => {
  return (
    <PageWrapper>
      <main>
        <ExamVoucher />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Courses;
