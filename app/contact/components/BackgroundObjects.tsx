import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const BackgroundObjects: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const colors = ['#ff5733', '#33ff57', '#3357ff', '#f3ff33', '#ff33f3', '#33fff3']
  let currentColorIndex = 0

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(0.2, 0) // Reduced size
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    const objects: THREE.Mesh[] = []

    for (let i = 0; i < 50; i++) {
      const object = new THREE.Mesh(geometry, material)
      object.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      )
      scene.add(object)
      objects.push(object)
    }

    camera.position.z = 5

    const changeBackgroundColor = () => {
      scene.background = new THREE.Color(colors[currentColorIndex])
      currentColorIndex = (currentColorIndex + 1) % colors.length
    }

    changeBackgroundColor()
    setInterval(changeBackgroundColor, 5000)

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}

export default BackgroundObjects 