import { Hero } from '@/components/sections/Hero'
import { Estadisticas } from '@/components/sections/Estadisticas'
import { Productos } from '@/components/sections/Productos'
import { Industrias } from '@/components/sections/Industrias'
import { LlamadoAccion } from '@/components/sections/LlamadoAccion'

export default function Inicio() {
  return (
    <>
      <Hero />
      <Estadisticas />
      <Productos />
      <Industrias />
      <LlamadoAccion />
    </>
  )
}