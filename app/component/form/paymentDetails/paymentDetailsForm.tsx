import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="Example Bank"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder="8920804195"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Dzhamur Softuer EOOD"
      variableName="accountName"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder="-"
      variableName="ifscCode"
    />
    <CustomTextInput
      label="Routing number"
      placeholder="-"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="-"
      variableName="swiftCode"
    />
  </div>
);
