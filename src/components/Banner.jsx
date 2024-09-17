
export default function Banner() {
    const array = [
        {
            numbers:'2M+',
            content:'Happy customers'
        },
        {
            numbers:'100%',
            content:'Customer Satisfaction'
        },
        {
            numbers:'20+',
            content:'Our Branches '
        },
        {
            numbers:'100+',
            content:'Total Employees '
        },
    ]
  return (
    <div className="bg-banner bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col p-10">
            <h2 className="font-inter text-center md:text-start text-white text-4xl font-semibold">We believe in making quality food</h2>
        <div className=" flex flex-col md:flex-row md:gap-36 gap-14 mt-10">
            {array?.map((item,index) => (
                <div key={index} className="flex flex-col gap-6 items-center">
                    <h3 className="font-inter text-white text-6xl font-bold">{item.numbers}</h3>
                    <p className="font-inter text-white font-normal text-lg">{item.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
