interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMsg?: string;
}

export default function Input(props: InputProps) {
  return (
    <div className="w-full">
      <input {...props} className="input w-full" />
      <p className="text-deep-orange-500 text-[12px] ml-[12px] mt-[4px]">
        {props.errorMsg}
      </p>
    </div>
  );
}
