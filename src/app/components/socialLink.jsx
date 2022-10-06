const SocialLink = ({ href, src, alt }) => {
  return (
    <a href={href} target='_blank' rel="noreferrer" className='p-3'>
      <img src={src} alt={alt} width='28' height='28' className='opacity-40' />
    </a>
  );
}

export default SocialLink;