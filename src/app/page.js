import Image from 'next/image'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <NavBar username='tylercritchlow' />
  )
}
