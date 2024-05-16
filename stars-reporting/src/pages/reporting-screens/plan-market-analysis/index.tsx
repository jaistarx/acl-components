import CustomUploadIcon from "@/assets/images/custom-upload-icon.svg";
import { PlanMarketAnalysisProps } from "./plan-market-analysis.types";
import { AclIcon } from "@acl/ui";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import PlanMarketAnalysisStyles from "./plan-market-analysis.module.css";

const PlanMarketAnalysis = (props: PlanMarketAnalysisProps) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleYearChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div
      className={
        PlanMarketAnalysisStyles["upload-market-analysis-outer-container"]
      }
    >
      <div
        className={PlanMarketAnalysisStyles["upload-market-analysis-container"]}
      >
        <h2
          className={PlanMarketAnalysisStyles["upload-market-analysis-title"]}
        >
          Upload Market Analysis Plan
        </h2>
        <FormControl
          className={
            PlanMarketAnalysisStyles["upload-market-analysis-form-control"]
          }
        >
          <InputLabel id="measurementYear-label">
            Select Measurement Year
          </InputLabel>
          <Select
            className={
              PlanMarketAnalysisStyles["upload-market-analysis-select"]
            }
            labelId="measurementYear-label"
            id="measurementYear"
            value={selectedYear}
            onChange={handleYearChange}
            label="Select Measurement Year"
          >
            <MenuItem value="">Select Year</MenuItem>
            <MenuItem value="MY2021">MY 2021</MenuItem>
            <MenuItem value="MY2022">MY 2022</MenuItem>
            <MenuItem value="MY2023">MY 2023</MenuItem>
            <MenuItem value="MY2024">MY 2024</MenuItem>
          </Select>
        </FormControl>
        <div
          {...getRootProps()}
          className={
            PlanMarketAnalysisStyles["upload-market-analysis-dropzone"]
          }
        >
          <div>
            <AclIcon
              className={
                PlanMarketAnalysisStyles["upload-market-analysis-icon"]
              }
              src={CustomUploadIcon}
              alt="custom-upload-icon"
            />
          </div>
          <input {...getInputProps()} />
          <p
            className={
              PlanMarketAnalysisStyles["upload-market-analysis-dropzone-text"]
            }
          >
            {isDragActive
              ? "Drop the files here ..."
              : "Drag 'n' drop some files here, or click to select files"}
          </p>
        </div>
        <Button
          variant="contained"
          component="label"
          className={
            PlanMarketAnalysisStyles["upload-market-analysis-upload-button"]
          }
        >
          Upload File
          <input type="file" hidden />
        </Button>
        <div>
          {uploadedFile && (
            <div
              className={
                PlanMarketAnalysisStyles["upload-market-analysis-uploadedfile"]
              }
            >
              <p>{uploadedFile.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanMarketAnalysis;
