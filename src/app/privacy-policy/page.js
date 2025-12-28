import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

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
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-700 leading-7">

              <p>
                We are committed to protecting your privacy and ensuring that your personal
                information is kept secure. This privacy policy outlines the types of personal
                information we collect, how it is used, and the steps we take to protect it.
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Personal Information We Collect
                </h2>

                <p className="mb-3">
                  We may collect personal information from you when you make a purchase or
                  sign up for our newsletter. This information may include:
                </p>

                <div className="space-y-2">
                  <p>✱ Your name</p>
                  <p>✱ Your email address</p>
                  <p>✱ Your mailing address</p>
                  <p>✱ Your phone number</p>
                  <p>
                    ✱ Your payment information (including credit card, Bkash, or Nagad account
                    details)
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  How We Use Your Personal Information
                </h2>

                <div className="space-y-2">
                  <p>✱ To process and fulfill your orders.</p>
                  <p>✱ To communicate with you about your orders.</p>
                  <p>
                    ✱ To send promotional materials or newsletters (only if you opt-in).
                  </p>
                  <p>✱ To improve our website and customer service.</p>
                </div>

                <p className="mt-3">
                  We do not sell or share your personal information with third parties for
                  their own marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Protection of Your Personal Information
                </h2>

                <p>
                  We take appropriate security measures to protect against unauthorized access
                  to or alteration of your personal information. These measures include secure
                  servers, firewalls, and encryption of sensitive information such as credit
                  card details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Changes to This Privacy Policy
                </h2>

                <p>
                  We may update this privacy policy from time to time. If any significant
                  changes are made, we will notify you by posting a notice on our website or
                  sending you an email. We encourage you to review this policy regularly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Contact Us
                </h2>

                <p>
                  If you have any questions or concerns about this privacy policy, please
                  contact us at:
                  <span className="font-semibold">info@csltraining.com</span>
                </p>
              </div>

            </div>
          </div>

        </>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Maintenance;
