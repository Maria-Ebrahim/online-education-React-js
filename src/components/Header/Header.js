import React, {useRef,useEffect} from 'react';
import { Container } from 'reactstrap';
import './header.css'

const navLinks=[
    {
        display:"Home",
        path:"#"
    },
        {
        display:"About",
        path:"#"
    },
        {
        display:"Courses",
        path:"#"
    },
        {
        display:"Bage",
        path:"#"
    },
        {
        display:"Blog",
        path:"#"
    },
]

const Header = () => {

    const menuRef  =useRef()
    const headerRef=useRef(null)
    const menuToggle =()=>menuRef.current.classList.toggle('active__menu')
    const stickyHeaderFunc =()=>{
        window.addEventListener('scroll',()=>{
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
            headerRef.current.classList.add('header__shrink')
          }
          else{
            headerRef.current.classList.remove('header__shrink')
          }
        })
      }
      
      useEffect(()=>{
        stickyHeaderFunc();
        return ()=>window.removeEventListener("scroll" , stickyHeaderFunc)
      },[])
  return (
    <>
    <header className='header'  ref={headerRef}>
        <Container>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <h2 className='d-flex align-items-center'><i class="ri-book-shelf-line"></i> Education.</h2>
                </div>
                <div className='nav d-flex align-items-center gap-5'>
                    <div className='nav__menu' ref={menuRef} onClick={menuToggle}>
                        <ul className='nav__list'>
                           {navLinks.map((item,index)=>(
                              <li className='nav-item' key={index}>
                                <a href={item.path}>{item.display}</a>
                               </li>
                           ))
                          }

                        </ul>
                    </div>

                    <div className='nav__right'>
                        <p className='mb-0 d-flex align-items-center gap-3'><i class="ri-phone-line"></i> 0996957329</p>

                    </div>

                </div>

                <div className='mobile__menu' >
                    <span><i class="ri-menu-line" onClick={menuToggle}></i></span>

                </div>

            </div>
        </Container>
    </header>
      
    </>
  )
}

export default Header
