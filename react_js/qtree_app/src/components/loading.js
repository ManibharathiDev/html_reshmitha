import { Image, Shimmer } from 'react-shimmer'

const Loading = () =>{
    return(
        <>
            <div>
                It is loading...

                <Shimmer width={1000} height={100} />
                <Shimmer width={1000} height={100} />
                <Shimmer width={1000} height={100} />
                <Shimmer width={1000} height={100} />
                <Shimmer width={1000} height={100} />
                

                    <Image
        src='https://www.qtreetechnologies.in/assets/frontend/img/slider/b1sdfdssfdsfsfdfsfsdfdsf.jpg'
        fallback={<Shimmer width={800} height={600} />}
      />

            </div>
        </>
    );
}
export default Loading;