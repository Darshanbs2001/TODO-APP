export interface ErrorProps{
    Err:{message:string},
}
export  function CustomError(Err:ErrorProps) {
  return (
    <div>{Err}</div>
  )
}
