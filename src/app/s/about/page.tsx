export default function AboutPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '90%',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <h1 style={{ color: '#80cc2b' }}>Solara</h1>
        <p style={{ lineHeight: '2' }}>
        O Solara é um controlador de microgrid, uma solução projetada para
          gerenciar o uso de energia por estes sistemas, registrando níveis de
          produção, armazenamento e consumo. Com a ferramenta, é possível acessar
          e otimizar o uso de energia tanto via desktop quanto por meio de
          dispositivos móveis. A interface é intuitiva, limpa e objetiva,
          proporcionando informações claras e transparentes. Com o Solara, você
          controla quais fontes de energia estarão ativas, além de monitorar a
          energia gerada e consumida. A solução permite a administração eficiente
          de múltiplas fontes de energia por meio de dashboards interativos e
          fáceis de usar, oferecendo uma visão detalhada do desempenho do seu
          microgrid.
        </p>
      </div>
      <img
        src="/microgrid.png"
        alt="Explicação do projeto em formato de imagem"
        style={{
          flex: 1,
          maxWidth: '100%',
          height: '50%',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
