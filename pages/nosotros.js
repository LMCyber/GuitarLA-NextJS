import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout='responsive'
            width={600}
            height={450}
            src='/img/nosotros.jpg'
            alt='Imagen sobre nosotros'
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nesciunt laudantium odit aut neque quos enim ab, quas recusandae
              ipsum praesentium tempora hic soluta exercitationem commodi
              eligendi eius placeat dolorem! Libero eum fugiat consequuntur quae
              dicta optio quisquam, voluptatum officia voluptatibus non
              deleniti, facilis quidem error laudantium ratione voluptatem x
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nesciunt laudantium odit aut neque quos enim ab, quas recusandae
              ipsum praesentium tempora hic soluta exercitationem commodi
              eligendi eius placeat dolorem! Libero eum fugiat consequuntur quae
              dicta optio quisquam, voluptatum officia voluptatibus non
              deleniti, facilis quidem error laudantium ratione voluptatem x
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
