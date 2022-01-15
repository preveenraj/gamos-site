import Image from "next/image";

const Icon = ({ iconNo, style }:any) => {
  return (
    <div className="save__icon" style={style} key={iconNo}>
      <Image
        src={"/images/event-icons/icons" + iconNo + ".png"}
        width={32}
        height={32}
        alt="Event Icon"
      />
    </div>
  );
};

export default Icon;
