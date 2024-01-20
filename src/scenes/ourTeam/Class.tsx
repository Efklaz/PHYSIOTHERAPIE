type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-secondary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
      <div className="relative mx-5 inline-block h-[380px] w-[450px]">
          <div className={overlayStyles}>
              <p className="text-2xl">{name}</p>
              <p className="mt-5">{description}</p>
          </div>
          <img className={'object-cover h-[380px] w-[450px]'} alt={`${image}`} src={image}/>
      </div>
  )
};

export default Class;
