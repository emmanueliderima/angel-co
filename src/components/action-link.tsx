
interface ActionLinkProps {
  icon: string
  color: string
  title: string
  subHeading: string
  alt: string
  handleClick?: () => void
}

const ActionLink = ({icon, color, title, subHeading, alt, handleClick}: ActionLinkProps) => {
  return (
    <div 
      className={`${color} flex flex-col justify-between p-4 rounded-[14px] min-h-[260px] md:min-h-[250px] xl:max-w-[280px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="p-3 glassmorphism rounded-[10px] size-12">
        <img src={icon} alt={alt} />
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white/80 text-lg font-normal">{subHeading}</p>
      </div>
    </div>
  )
}

export default ActionLink;