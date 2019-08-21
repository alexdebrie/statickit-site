export default props => (
  <h2 className="flex items-center">
    <div className="flex items-center justify-center mr-3 text-base bg-green-200 w-8 h-8 rounded-full font-bold text-green-700">
      {props.step}
    </div>
    <div>{props.children}</div>
  </h2>
);
