"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import SuccessModal from "@/components/shared/SuccessModal";
import { useState, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { ImageIcon, NoteIcon, PdfIcon } from "@/components/svg";

const uploadAddressProofSchema = z.object({
  documentType: z.string().min(1, "Please select a document type"),
});

type UploadAddressProofFormValues = z.infer<typeof uploadAddressProofSchema>;

const DOCUMENT_TYPES = [
  "National ID Card",
  "Utility Bill",
  "Bank Statement",
  "Tenancy Agreement",
  "Government Letter",
];

const UploadAddressProofComponent = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<UploadAddressProofFormValues>({
    resolver: zodResolver(uploadAddressProofSchema),
    defaultValues: {
      documentType: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const onSubmit = async (data: UploadAddressProofFormValues) => {
    console.log("Upload proof submitted:", data, selectedFile);
    setIsAlertOpen(true);
    // TODO: call API
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Select a Document */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="documentType"
          label="Select a Document"
          placeholder="Select document type"
          options={DOCUMENT_TYPES.map((d) => ({
            label: d,
            value: d,
          }))}
        />

        {/* Upload from Gallery */}
        <div className="space-y-2">
          <label className="text-[13px] font-[300]">Upload from Gallery</label>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpeg,.jpg,.png"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Upload trigger div */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 cursor-pointer rounded-xl border border-neutral-400 md:p-6 p-4 hover:bg-neutral-150 transition-colors"
          >
            {/* Inner dotted border div */}
            <div className="rounded-sm mb-4 border-2 border-dashed bg-neutral-50 border-neutral-200 p-6 flex flex-col items-center gap-3">
              {/* Icons row */}
              <div className="flex flex-row items-center gap-2">
                <ImageIcon />
                <PdfIcon />
              </div>

              {/* Upload text */}
              <p className="text-[13px] font-medium text-neutral-500">
                {selectedFile
                  ? selectedFile.name
                  : "Click here to upload your ID"}
              </p>
            </div>
            {/* File format notice */}
            <div className="flex items-center gap-2 mt-1">
              <NoteIcon />
              <p className="text-xs text-start font-[300]">
                File must be an image in PDF, JPEG and PNG format less than 2MB.
              </p>
            </div>
          </div>

          <p className="text-xs">
            Please upload a high quality image of your National Identity card
          </p>
        </div>

        <CustomButton title="Submit" type="submit" className="w-full" />
      </form>

      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={() => setIsAlertOpen(false)}
        title="Verification Pending!"
        description="Your utility bill has been submitted successfully, you will receive a notification once verified"
      />
    </PageTransitionWrapper>
  );
};

export default UploadAddressProofComponent;
