namespace BicycleFactoryAbstract {
  // Interfaces de los Productos
  interface Tire {
    install(): void;
  }

  interface Handlebar {
    attach(): void;
  }

  // Productos Concretos: Familia Mountain
  class MountainTire implements Tire {
    install(): void {
      console.log("Preparando llanta ancha con tacos para montaña...");
    }
  }

  class MountainHandlebar implements Handlebar {
    attach(): void {
      console.log("Sirviendo manubrio recto y ancho para mayor control..");
    }
  }

  // Productos Concretos: Familia Road (Ruta / Carreras)
  class RoadTire implements Tire {
    install(): void {
      console.log("Preparando llanta delgada y lisa para ruta...");
    }
  }

  class RoadHandlebar implements Handlebar {
    attach(): void {
      console.log("Sirviendo manubrio curvo aerodinámico para ruta...");
    }
  }

  // Interface Factory
  interface BicycleFactory {
    createTire(): Tire;
    createHandlebar(): Handlebar;
  }

  // Fábricas Concretas
  class MountainBicycleFactory implements BicycleFactory {
    createTire(): Tire {
      return new MountainTire();
    }

    createHandlebar(): Handlebar {
      return new MountainHandlebar();
    }
  }

  class RoadBicycleFactory implements BicycleFactory {
    createTire(): Tire {
      return new RoadTire();
    }

    createHandlebar(): Handlebar {
      return new RoadHandlebar();
    }
  }

  // Cliente
  class Workshop {
    constructor(private factory: BicycleFactory) {}

    assembleBicycle(): void {
      const tire = this.factory.createTire();
      const handlebar = this.factory.createHandlebar();

      tire.install();
      handlebar.attach();

      console.log("Combo listo.");
    }
  }

  // Ejecución
  function main() {
    let factory: BicycleFactory;

    const BikeType = prompt(
      "¿Qué tipo de combito deseas? (1.- Mountain / 2.- Road)",
    );

    if (BikeType === "Mountain" || BikeType === "1") {
      factory = new MountainBicycleFactory();
    } else {
      factory = new RoadBicycleFactory();
    }

    const workshop = new Workshop(factory);
    workshop.assembleBicycle();
  }

  main();
}
