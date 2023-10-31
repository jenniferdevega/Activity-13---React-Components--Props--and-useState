function Footer({copyright}) {

    return(
      <footer>
        <h3 className="container-fluid bg-primary text-center position-absolute bottom-0 badge mt-auto">
        {copyright}
        </h3>
      </footer>
    )
}

export default Footer;