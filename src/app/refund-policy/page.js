import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "CSL Training | Terms & Conditions",
};
const Maintenance = () => {
  return (
    <PageWrapper>
      <main>
        <>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">
              Terms & Conditions
            </h1>
            <p>✱ কোর্সে বা এক্সাম রেজিস্ট্রেশন করার পরে হঠাৎ করে ভর্তি বাতিল করার সিদ্ধান্ত নিলে সে ক্ষেত্রে অনলাইন পেমেন্ট চার্জ ছাড়া পেমেন্ট রিফান্ড পাওয়া যাবে।</p>

            <p>✱ আপনি যে মাধ্যমে পেমেন্ট করেছেন সেই একই পেমেন্ট চ্যানেলের মাধ্যমে আপনার অর্থ ফেরত প্রদান করা হবে এবং পেমেন্ট রিফান্ডের ক্ষেত্রে ব্যাংক বা মোবাইল ব্যাংকিং কর্তৃপক্ষের রিফান্ড পলিসি টাইম ০৭-১০ কার্যদিবস প্রযোজ্য হবে।</p>

            <p><Link href="/terms-and-conditions"  className="text-red-600 font-bold my-2">➜ আমাদের সকল টার্মস এন্ড কন্ডিশন বিস্তারিত জানতে এখানে ক্লিক করুন।</Link></p>
          </div>
        </>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Maintenance;
