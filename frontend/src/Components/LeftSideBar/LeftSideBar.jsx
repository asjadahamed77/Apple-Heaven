import React from 'react'
import './LeftSideBar.css'
import { Link } from 'react-router-dom'

const LeftSideBar = () => {
  return (
    <div className='left-side-bar'>
        <div className="search-input">
            <input type="search" placeholder='search for phone'/>
        </div>
        <div className="phone-list">
            <h2>Looking for...</h2>
            <ul className='phone-list-list'>
                <h3>15 series</h3>
                <Link to={'/shop/iPhone%2015%20pro%20max'} style={{ textDecoration: 'none' }}><li>iPhone 15 pro max</li></Link>
                <Link to={'/shop/iPhone%2015%20pro'} style={{ textDecoration: 'none' }}><li>iPhone 15 pro</li></Link>
                <Link to={'/shop/iPhone%2015%20plus'} style={{ textDecoration: 'none' }}><li>iPhone 15 plus</li></Link>
                <Link to={'/shop/iPhone%2015'} style={{ textDecoration: 'none' }}><li>iPhone 15 </li></Link>
                
            </ul>
           <ul className='phone-list-list'>
                <h3>14 series</h3>
                <Link to={'/shop/iPhone%2014%20pro%20max'} style={{ textDecoration: 'none' }}><li>iPhone 14 pro max</li></Link>
                <Link to={'/shop/iPhone%2014%20pro'} style={{ textDecoration: 'none' }}><li>iPhone 14 pro</li></Link>
                <Link to={'/shop/iPhone%2014%20plus'} style={{ textDecoration: 'none' }}><li>iPhone 14 plus</li></Link>
                <Link to={'/shop/iPhone%2014'} style={{ textDecoration: 'none' }}><li>iPhone 14 </li></Link>
                
            </ul>
            <ul className='phone-list-list'>
                <h3>13 series</h3>
                <Link to={'/shop/iPhone%2013%20pro%20max'} style={{ textDecoration: 'none' }}><li>iPhone 13 pro max</li></Link>
                <Link to={'/shop/iPhone%2013%20pro'} style={{ textDecoration: 'none' }}><li>iPhone 13 pro</li></Link>
                <Link to={'/shop/iPhone%2013'} style={{ textDecoration: 'none' }}><li>iPhone 13</li></Link>
                <Link to={'/shop/iPhone%2013%20mini'} style={{ textDecoration: 'none' }}><li>iPhone 13 mini</li></Link>
                
            </ul>
            <ul className='phone-list-list'>
                <h3>12 series</h3>
                <Link to={'/shop/iPhone%2012%20pro%20max'} style={{ textDecoration: 'none' }}><li>iPhone 12 pro max</li></Link>
                <Link to={'/shop/iPhone%2012%20pro'} style={{ textDecoration: 'none' }}><li>iPhone 12 pro</li></Link>
                <Link to={'/shop/iPhone%2012'} style={{ textDecoration: 'none' }}><li>iPhone 12</li></Link>
                <Link to={'/shop/iPhone%2012%20mini'} style={{ textDecoration: 'none' }}><li>iPhone 12 mini</li></Link>
                
            </ul>
            <ul className='phone-list-list'>
                <h3>SE series</h3>
                <Link to={'/shop/iPhone%20SE%202020'} style={{ textDecoration: 'none' }}><li>iPhone SE 2020</li></Link>
                <Link to={'/shop/iPhone%20SE%202022'}  style={{ textDecoration: 'none' }}><li>iPhone SE 2022</li></Link>              
            </ul>
            <ul className='phone-list-list'>
                <h3>11 series</h3>
                <Link to={'/shop/iPhone%2011%20pro%20max'}  style={{ textDecoration: 'none' }}><li>iPhone 11 pro max</li></Link>
                <Link to={'/shop/iPhone%2011%20pro'}  style={{ textDecoration: 'none' }}><li>iPhone 11 pro</li></Link>
                <Link to={'/shop/iPhone%2011'}  style={{ textDecoration: 'none' }}><li>iPhone 11</li></Link>             
            </ul>
        </div>
      
    </div>
  )
}

export default LeftSideBar
