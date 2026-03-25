export type ApiError = {
  error: string;
  message: string;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
};

export type PaginatedResponse<T> = {
  page: number;
  page_size: number;
  total: number;
  data: T;
};

export type PaginatedApiResponse<T> = ApiResponse<PaginatedResponse<T>>;

export type PaginationParams = {
  page?: number;
  page_size?: number;
  [key: string]: any;
};

export enum FormFieldType {
  INPUT = "text",
  PASSWORD = "password",
  NUMBER = "number",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  DATE = "date",
  SELECT = "select",
  SKELETON = "skeleton",
  EMAIL = "email",
}