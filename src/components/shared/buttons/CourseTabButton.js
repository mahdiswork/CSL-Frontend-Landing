const CourseTabButton = ({ children, idx, currentIdx, handleTabClick }) => {
  return (
    <button
      onClick={() => handleTabClick(idx)}
      className={`is-checked relative px-10px py-5px whitespace-nowrap  text-blackColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center  ${
        idx === currentIdx ? "active" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default CourseTabButton;
