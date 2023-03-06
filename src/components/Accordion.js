import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Accordion = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="py-3 mb-2 border-b-2" onClick={setIsVisible}>
      <div className="flex justify-between cursor-pointer">
        <span className="inline-block mb-2 text-[#3d4152] text-lg">
          {title}
        </span>
        {isVisible ? (
          <MdKeyboardArrowUp className="mr-2 text-3xl fill-[#93959f]" />
        ) : (
          <MdKeyboardArrowDown className="mr-2 text-3xl fill-[#93959f]" />
        )}
      </div>
      {isVisible &&
        (description === null ? (
          <p className="text-[#686b78] text-sm pr-5">
            Send an email to rajnish@kalpbhojanam.com.
          </p>
        ) : (
          <p className="text-[#686b78] text-sm pr-5">{description}</p>
        ))}
    </div>
  );
};

export default Accordion;
