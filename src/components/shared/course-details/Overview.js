import Image from "next/image";
import Link from "next/link";

const Overview = ({ id }) => {
  return (
    <>
        {/* Overview  */}
        <div className="w-full px-5 py-5 md:px-30px lg:px-5 2xl:px-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark">
          <p>CSL Training is one of the prominent IT training institute offers CCNA Training in Dhaka for interested students. Throughout the world, CCNA 200-301 is the most valued IT certification and is a highly respected & sought-after credential. The full abbreviation of CCNA 200-301 is Cisco Certified Network Associate. It’s an IT certification developed by the famous brand Cisco. This certification will validate an individual’s level of skill through a series of network-related topics. Cisco CCNA Training in Dhaka is considered as one of the high regarding certification in the networking field. If you want to get a high quality CCNA 200-301 training in Dhaka, then you are in the right place.</p>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              Course Objectives
            </h2><br/>
            <ul>
                <li>Network Fundamentals</li>
                <li>Network Access Technologies</li>
                <li>IP (IPv4 &amp; IPv6) Connectivity</li>
                <li>IP Services (ACL, HSRP, EtherChannel, DHCP, NAT, DNS)</li>
                <li>Security Fundamentals</li>
                <li>Network Automation and Programmability</li>
                <li>Implementing Network Device Security</li>
                <li>Network Device Management</li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default Overview;