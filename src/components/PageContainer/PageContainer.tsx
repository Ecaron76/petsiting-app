import  './pagecontainer.css'; // Utilisation de modules CSS pour une meilleure gestion des styles


export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <div className='pagecontainer'>
        {children}
      </div>
    )
  }