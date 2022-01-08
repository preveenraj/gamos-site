import React from 'react'

const ArealMap = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
      <iframe
        title="map"
        className="h-2/3 w-full rounded-lg"
        width="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.575303291708!2d76.28005561479395!3d9.969248092872245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872ad8cb119c1%3A0x50aa6d0e055d6584!2sSeetha%20Rama%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1641648752353!5m2!1sen!2sin"
      />
    </div>
    )
}

export default ArealMap;
