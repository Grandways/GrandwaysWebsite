const Custom404 = () => {

  return(
      <section className="w-full flex bg-[#F8F9F9] h-screen justify-center">
          <div className="w-full h-[90vh] min-h-fit flex flex-col items-center
          justify-center gap-y-4 max-w-[1500px] px-2 md:px-6 2xl:px-12 text-center">
              <h1>404</h1>
              <h3 className="pb-[25px]">Page not found!</h3>
              <button className="w-[150px] h-[50px] border-[1px] border-[#333333] rounded-[25px]">Take Me Back</button>
          </div>
      </section>
  )
};
export default Custom404;