export type MethodResult = number | boolean | null

export interface Props {
  method: (value: string) => MethodResult
  hint: string
  placeholder: string
}
