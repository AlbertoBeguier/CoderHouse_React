import { getFirestore, collection, addDoc } from "firebase/firestore";

export const LoadDataToFirestore = () => {
  const items = [
    {
      title: "Smart Tv Samsung 50 Un50cu7000gczb Led 4k",
      description:
        "Su resolución es 4K UHD.\nTecnología HDR para una calidad de imagen mejorada.\nSistema operativo Google TV.\nCuenta con conexión HDMI y USB.\nEntretenimiento y conectividad en un mismo lugar.",
      price: 473.79,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_982177-MLU75259000038_032024-O.webp",
      stock: 15,
    },
    {
      title: "Apple iPhone 15 Pro Max (256 Gb) Nuevo Liberado ",
      description:
        'Memoria RAM: 16 GB\nDispositivo liberado para que elijas la compañía telefónica que prefieras.\nCompatible con redes 5G.\nPantalla Dynamic AMOLED 2X de 6.1".\nTiene 3 cámaras traseras de 50Mpx/12Mpx/10Mpx.\nCámaras delanteras de 10Mpx.\nProcesador Snapdragon 8 Gen 1 Octa-Core de 2.99GHz con 8GB de RAM.\nBatería de 3700mAh con carga inalámbrica.\nMemoria interna de 128GB.\nA prueba de agua.\nCon reconocimiento facial y sensor de huella dactilar.\nResistente al polvo y a las caídas.\nTarjeta eSIM incluida.',
      price: 1748.14,
      category: "SmartPhone",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_698061-MLA75343728605_032024-O.webp",
      stock: 4,
    },
    {
      title: "Pc Intel I9 16gb Nvidia 3070  M.2 Render Gamer",
      description:
        "Procesador:\nCPU INTEL CORE I9-14900K RAPTORLAKE S1700 BOX\nMotherboard:\nMotherboard Msi Mag Z790 Tomahawk Max Wifi Ddr5 Intel\nRefrigeracion:\nWater Cooler Cpu Arctic Liquid Freezer Ii 360 Am5 Intel 1700\nMemoria:\nKit Memoria Ram Ddr5 Ram 64gb (2x32gb)black Blade Rgb 6400mhz\nAlmacenamiento:\n-DISCO SSD M.2 de 2tb NVME para Sistema operativo\n- Disco de 4Tb SSD SATA para Back up\nPlaca de video:\n- RTX 4090 24GB GDDR6\nFuente:\n850w Gigabyte PCI EX 5.0\nGabinete Gabinete Gamer Adata Xpg Cruiser",
      price: 6350.12,
      category: "Computer",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_633543-MLA51648535209_092022-O.webp",
      stock: 4,
    },
    {
      title: "Jbl Barra De Sonido Sb140 Black 2.1 110w Bluetooth",
      description:
        "Voltaje: 110V/220V. \nPotencia RMS de 110W. \nConectividad Bluetooth.\nRango de frecuencia 40Hz - 20kHz.",
      price: 335.97,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_2X_802496-MLU74218970031_012024-F.webp",
      stock: 10,
    },
    {
      title: "Auriculares Inalambricos Jbl Tune 770nc Over Ear",
      description:
        "Modo manos libres incluido.\nCon cancelación de ruido.\nCon micrófono incorporado.\nSonido superior y sin límites.\nCómodos y prácticos.\nTamaño del altavoz: 40mm.",
      price: 135.74,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_689800-MLU71717692665_092023-O.webp",
      stock: 7,
    },
    {
      title: "Pc Gamer Intel Pulga Última Generación 64gb Ram",
      description:
        "Procesador:\nCPU INTEL CORE I9-14900K RAPTORLAKE S1700 BOX\nMotherboard:\nMotherboard Msi Mag Z790 Tomahawk Max Wifi Ddr5 Intel\nRefrigeracion:\nWater Cooler Cpu Arctic Liquid Freezer Ii 360 Am5 Intel 1700\nMemoria:\nKit Memoria Ram Ddr5 Ram 64gb (2x32gb)black Blade Rgb 6400mhz\nAlmacenamiento:\n-DISCO SSD M.2 de 2tb NVME para Sistema operativo\n- Disco de 4Tb SSD SATA para Back up\nPlaca de video:\n- RTX 4090 24GB GDDR6\nFuente:\n850w Gigabyte PCI EX 5.0\nGabinete Gabinete Gamer Adata Xpg Cruiser",
      price: 7907.42,
      category: "Computer",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_942513-MLA70198198942_062023-O.webp",
      stock: 16,
    },
    {
      title: "Celular Samsung Galaxy S22 5g 128gb + 8gb 120 Hz Negro",
      description:
        'Memoria RAM: 8 GB\nDispositivo liberado para que elijas la compañía telefónica que prefieras.\nCompatible con redes 5G.\nPantalla Dynamic AMOLED 2X de 6.1".\nTiene 3 cámaras traseras de 50Mpx/12Mpx/10Mpx.\nCámaras delanteras de 10Mpx.\nProcesador Snapdragon 8 Gen 1 Octa-Core de 2.99GHz con 8GB de RAM.\nBatería de 3700mAh con carga inalámbrica.\nMemoria interna de 128GB.\nA prueba de agua.\nCon reconocimiento facial y sensor de huella dactilar.\nResistente al polvo y a las caídas.\nTarjeta eSIM incluida.',
      price: 1249.99,
      category: "SmartPhone",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_651731-MLU75081570841_032024-O.webp",
      stock: 12,
    },
    {
      title: "Auriculares Sony Bluetooth Inalámbricos Wh-ch5200",
      description:
        "Alcance inalámbrico de 10 m.\nModo manos libres incluido.\nAsistente de voz integrado: Google Assistant.\nCon micrófono incorporado.\nEl largo del cable es de 0.2 m.\nUso apto para clase online.\nSonido superior y sin límites.\nCómodos y prácticos.\nTamaño del altavoz: 30mm.",
      price: 79.99,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_972200-MLU74088420395_012024-O.webp",
      stock: 24,
    },

    {
      title: "Smart TV Hyundai HYLED-58UHD4 4K 58",
      description:
        "Alcance inalámbrico de 10 m.\nModo manos libres incluido.\nAsistente de voz integrado: Google Assistant.\nCon micrófono incorporado.\nEl largo del cable es de 0.2 m.\nUso apto para clase online.\nSonido superior y sin límites.\nCómodos y prácticos.\nTamaño del altavoz: 30mm.",
      price: 308.02,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_601732-MLA42840824351_072020-O.webp",
      stock: 14,
    },
    {
      title: "Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM",
      description:
        'Memoria RAM: 8 GB\nDispositivo liberado para que elijas la compañía telefónica que prefieras.\nCompatible con redes 5G.\nPantalla Dynamic AMOLED 2X de 6.1".\nTiene 3 cámaras traseras de 50Mpx/12Mpx/10Mpx.\nCámaras delanteras de 10Mpx.\nProcesador Snapdragon 8 Gen 1 Octa-Core de 2.99GHz con 8GB de RAM.\nBatería de 3700mAh con carga inalámbrica.\nMemoria interna de 128GB.\nA prueba de agua.\nCon reconocimiento facial y sensor de huella dactilar.\nResistente al polvo y a las caídas.\nTarjeta eSIM incluida.',
      price: 354.59,
      category: "SmartPhone",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_909752-MLA75257662226_032024-O.webp",
      stock: 4,
    },
    {
      title: "Pc Gamer Amd Ryzen 5 8600g 16gb Ram Nvme 1tb",
      description:
        "- AMD RYZEN 5 8600G RADEON (6C/12T)\n- MOTHER: A620M\n- MEMORIA RAM: DDR5 16GB (2X8GB) 4800MHZ\n- VIDEO AMD Radeon 760M 8CU RDNA3 (Integrado)\n- DISCO SSD KINGSTON 1TB NVME\n- GABINETE GAMER 3 COOLERS RGB\n- FUENTE 650W\n- SISTEMA OPERATIVO: WINDOWS 10 64BITS\n- OFFICE 2016\n- PAQUETE ADOBE (MENCIONAR EN CHAT)\n- ANTIVIRUS",
      price: 1115.01,
      category: "Computer",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_614646-MLA74449004152_022024-O.webp",
      stock: 7,
    },
    {
      title: "Barra De Sonido LG Sk1 Black 2.0 40w",
      description:
        "Voltaje: 110V/220V. Compatible para conectarse mediante Bluetooth, Óptico, USB-A, Jack 3.5 mm.\nIncluye un parlante: barra de sonido.\nCon formato de audio Dolby Digital, LPCM, AAC, Dolby Audio, MP3, SBC.\nConfiguración de canales en tecnología 2.0.\nReproduce video en formato DVD, Blu-ray.\nDisfrutá de la calidad y el efecto del cine en casa.\nCon control remoto.\nIncluye cables: Óptico.",
      price: 283.12,
      category: "AudioYTv",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_975940-MLU73848606726_012024-O.webp",
      stock: 10,
    },
  ];

  const loadData = () => {
    const db = getFirestore(); // Inicializamos la base de datos de Firestore
    items.forEach(item => {
      addDoc(collection(db, "items"), item)
        .then(docRef => {
          console.log("Documento escrito con ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error añadiendo documento: ", error);
        });
    });
  };

  return (
    <div>
      <h1>Cargar datos a Firestore</h1>
      <button onClick={loadData}>Cargar Datos</button>
    </div>
  );
};
