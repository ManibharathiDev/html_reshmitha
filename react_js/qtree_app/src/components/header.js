// function Header(){
//     return(
//         <>
//             <h1>Header</h1>
//         </>
//     );
// }

const Header = () =>{

    const myStyle = {
        'backgroundColor':'#F00',
        'color':'#FFF',
        'border':'5px solid #000',
        'margin':'10px',
        'padding':'10px'
    };

    return(
        <>
             <h1 style={myStyle}>Top Header</h1>

            {/*<h2 style={
                {'backgroundColor':'#0F0'}
                }>My Headings</h2> */}

            <h1 className='heading'>Header</h1>    
        </>
    );
}

export default Header;