type CoverProps = {
  isOpen: boolean;
};
const Cover = ({ isOpen }: CoverProps) => {
  return (
    <>
      {isOpen && (
        <div className=" h-[150vh] min-h-screen min-w-full absolute top-0 left-0 bg-black opacity-70 z-10"></div>
      )}
    </>
  );
};

export default Cover;
