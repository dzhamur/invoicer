import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Dzhmur Softuer EOOD",
    companyAddress: "ul. General Gurko 84",
    companyCity: "Varna",
    companyState: "Varna",
    companyCountry: "Bulgaria",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "BG123456789",
    companyZip: "9000",
    email: "seyhan@dzhamur.com",
  },
  yourDetails: {
    yourName: "Seyhan Dzhamur",
    yourAddress: "ul. General Gurko 84",
    yourCity: "Varna",
    yourState: "Varna",
    yourCountry: "Bulgaria",
    yourLogo: "/android-chrome-192x192.png",
    yourEmail: "seyhan@dzhamur.com",
    yourTaxId: "BG123456789",
    yourZip: "9000",
  },
  paymentDetails: {
    bankName: "Example Bank",
    accountNumber: "1234567890",
    accountName: "Dzhamur Softuer EOOD",
    routingCode: "-",
    swiftCode: "-",
    ifscCode: "-",
    currency: "EUR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #0000000001",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0300 (Eastern European Summer Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0300 (Eastern European Summer Time)",
  },
  invoiceDetails: {
    note: "Thank you for your business",
    discount: "0",
    taxRate: "20",
    items: [
      {
        itemDescription: "Software Development",
        amount: 100000,
        qty: 1,
      },
      {
        itemDescription: "Consulting Services",
        amount: 22000,
        qty: 1,
      },
    ],
    currency: "EUR",
  },
};
export default DemoPreview;
