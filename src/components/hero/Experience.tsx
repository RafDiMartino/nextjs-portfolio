import { useFrame } from '@react-three/fiber'
import { OrbitControls, useHelper, BakeShadows, SoftShadows, AccumulativeShadows, RandomizedLight, ContactShadows, Sky, Environment, Lightformer } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })

export default function Experience()
{
    const directionalLight: any = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const cube: any = useRef()
    
    useFrame((state, delta) =>
    {
        // const time = state.clock.elapsedTime
        // cube.current.position.x = 2 + Math.sin(time)
        cube.current.rotation.y += delta * 0.2
    })

    const { opacity, blur } = useControls('contact shadows', {
        
        opacity: {value: 0.4, min: 0, max: 1},
        blur: {value: 2.8, min: 0, max: 10}
    })

    // const { sunPosition } = useControls("sky", {
    //     sunPosition: {value: [1, 2, 3]}
    // })

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale  } = useControls("environment map", {
        envMapIntensity: {value: 7, min: 0, max: 12},
        envMapHeight: {value: 7, min: 0, max: 100},
        envMapRadius: {value: 28, min: 10, max: 1000},
        envMapScale: {value: 100, min: 10, max: 1000}
    })

    return <>
        <Environment 
            // background
            ground= {{
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale
            }}
            preset='sunset'
            // resolution={32}
            // files={[
            //     "/environmentMaps/2/px.jpg",
            //     "/environmentMaps/2/nx.jpg",
            //     "/environmentMaps/2/py.jpg",
            //     "/environmentMaps/2/ny.jpg",
            //     "/environmentMaps/2/pz.jpg",
            //     "/environmentMaps/2/nz.jpg"
            // ]}
            // files={
            //     "/environmentMaps/the_sky_is_on_fire_2k.hdr"
            // }
        >
            {/* <color args={['black']} attach='background'/>
            <Lightformer position-z={- 5} scale={10} color={'red'} intensity={5} form='ring'/> */}
            {/* <mesh position-z={ -5 } scale={10}>
                <planeGeometry />
                <meshBasicMaterial color={[100,0,0]} />
            </mesh> */}

        </Environment>


        
        {/* <BakeShadows /> */}
        {/* <SoftShadows 
            size={25} 
            focus={50}
            samples={17} 
        /> */}

        {/* <AccumulativeShadows
            position={ [0, - 0.99, 0] }
            scale={ 10 }
            color='#316d39'
            opacity={0.9}
            frames={ Infinity }
            temporal
            blend={100}
        >
            <RandomizedLight 
                position={ [ 1, 2, 3 ] }
                amount={8}
                radius={1}
                intensity={1}
                ambient={0.5}
                bias={0.001}
            />
        </AccumulativeShadows> */}

        <ContactShadows 
            position={ [0, 0, 0] }
            scale={10}
            resolution={512}
            far={5}
            color= '#4b2709'
            opacity={opacity}
            blur={blur}
            frames={1}
        />

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight 
            ref={ directionalLight } 
            // position={ [ 1, 2, 3 ] } 
            position={ sunPosition } 
            intensity={ 1.5 } 
            castShadow
            shadow-mapSize={ [ 2048,2048 ]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={- 5}
            shadow-camera-left={- 5}
        /> */}
        {/* <ambientLight intensity={ 0.5 } /> */}

        {/* <Sky sunPosition={sunPosition}/> */}

        <mesh castShadow position-y={ 1 } position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh castShadow ref={ cube } position-y={ 1 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity}/>
        </mesh>

        {/* <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity}/>
        </mesh> */}

    </>
}