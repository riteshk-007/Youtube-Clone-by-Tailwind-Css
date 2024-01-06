// eslint-disable-next-line react/prop-types
function LeftNavMenuItem({ text, icon, className, action }) {
  return (
    <div
      className={
        "text-black dark:text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[4px] rounded-lg hover:dark:bg-white/[0.15] hover:dark:bg-white[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
}

export default LeftNavMenuItem;
