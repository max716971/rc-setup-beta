const STORAGE_KEY = 'rc-setup-beta-v1';
const MAX_SETUP_PHOTOS = 4;
const CAR_CATALOG = [
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Original (1984)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 TQ10 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Championship Edition (1990, pré-Stealth)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Team Car (1990)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Championship Edition (1992, Stealth)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Worlds Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Classic (re-release)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4 RTR / SE / RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.1 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.2 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Factory Lite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Champions Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6 Club Racer",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1 Factory Lite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1DL Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.2 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.2D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.3 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.3D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4CC Collector's Clear Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7.1 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7.1D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.1 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.2 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.3 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B64 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B64D Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.1 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2D Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2 CE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2D CE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10B84 Team Kit (#90050)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10B84D Team Kit (#90051)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T5M",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "SC10B",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "SC10B RS RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.2 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4 RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 4WD Kit (#6040)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 4WD Team Car Kit (#6046)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "CAT XLS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "CAT 2000 / CAT 3000",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Cougar 2000 / 2001",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Cougar 2 / Cougar 2 Works",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mission / Mission FT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mi2 / Mi2 EC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mi3 / Mi3.5 / Mi4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Fireblade",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar LD2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar Laydown",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar SVR / SV2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "CAT L1 / L1R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "CAT L1 EVO",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Mi6 / Mi6evo / Mi7 / Mi8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Eclipse 4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Icon 2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "STORM ST",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Optima",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Optima Mid",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Turbo Optima",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Ultima",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Ultima Pro / Pro XL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Scorpion",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Tomahawk",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Javelin",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Turbo Scorpion",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Lazer ZX / ZX-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10e",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Inferno Neo",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "RB7",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "ZX7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Ultima RB7.5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Fazer Mk2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "TF7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Graphite Worlds RC10 FR-01",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Graphite Worlds Special Edition Blue FR-01BU",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Composite Worlds RC10 FR-02",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Composite Worlds Carbon Tub FR-02CT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Racer Worlds FR-007",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Long Arm Worlds Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "JRX2 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Rough Rider",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Sand Scorcher",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "The Frog",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Hotshot",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Avante",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Astute",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Egress",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Top Force",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Dyna Storm",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Manta Ray",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Wild One",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Clod Buster",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF201 / TRF201X",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF211XM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF501X / TRF511",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TD2 / TD4",
    "scale": "1/10",
    "drive": "2WD / 4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TT-01 / TT-02",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TA05 / TA06 / TA07 / TA08",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TB-04 / TB-05 / TB-07",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "XV-01 / XV-02",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "M-05 / M-06 / M-07 / M-08",
    "scale": "1/10",
    "drive": "2WD",
    "type": "M-Chassis"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "CC-02 / CC-01",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "GF-01 / G6-01",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB8 (premières générations)",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB808 / XB9",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB4 (premières générations)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB2 (premières générations)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "T4 (premières générations)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8E",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XT4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XT2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "X1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Formula"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB4C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy Carpet"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR S1 / S1 V2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR SB401 / SB401-LW",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR SB401-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V3 Type R EVO",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR B10R",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR SB401-R Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 (rear motor)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 Mid-Motor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 4.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 4.0 SR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 AC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 DC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 DC Elite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X AC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X DC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X DC Elite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4 2.0 AC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4 2.0 DC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 4.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T Mid-Motor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX BK2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-4 Worlds Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCB",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-X 2.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE 2.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE 2.0 Elite",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-E 3.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-E 4.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XT",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XTE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-T 4.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Mini-B",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Mini-T 2.0",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TENACITY DB Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Baja Rey",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "LMT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Lasernut U4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CA",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL3.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM3.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTMW",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4SF",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4SF2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 MR2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 MR3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX4 III",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "RO1.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RO2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO1.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO2.0 Dirt Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SO3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MO1.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MO2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MO3.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD9",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD11",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD12",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BDR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Dog Fighter 870C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Wonder Dog Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 91",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Works 92",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Works 93 WCS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2E",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2S",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2Z",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RD1.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RD2.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD1.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD2.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD3.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MSB1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MSX1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8 Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8R Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-9",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8TR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8T Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MTX-7R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTC1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTC2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MTC3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-5 Squared",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "X-6 Cubed",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-60",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "X-60 CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "SCX-60",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "SCX-60 CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bandit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bandit VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 2WD",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 2WD VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4 Ultimate",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mudboss Slash",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bigfoot",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bigfoot No. 1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Ford F-150 Raptor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Drag Slash",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Drag"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Jato 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Maxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "X-Maxx",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "XRT",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Summit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "E-Revo 2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Revo 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Sledge",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4 Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-6",
    "scale": "1/10",
    "drive": "6WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4M",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mini Maxx",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mini XRT",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX Pro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX Pro SE",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Junior Two",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX BK (BK1)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX4 G+",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCB RTR AVC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Slider Dirt Oval Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 TwentyTwo Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 TwentyTwo RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 3.0 Spec-Racer MM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 5.0 SR Race Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S 69 Camaro Drag Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S No Prep Drag Roller",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT 2.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT 3.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE Race Roller",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE Troy Lee Designs",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten-SCT Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "ReadyLift XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rockstar XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Stronghold XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT Brushless",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT ReadyLift",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT Rockstar",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T 2.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T 3.0 Mid-Motor Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-T CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Matt Francis Special Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T MF2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "GTX Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "NXT Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Speed-NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Adam Drake",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Adam Drake 2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT RTR II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "810 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight RTR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 EU",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 3.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 4.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-X Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-X Elite Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 2.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 3.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 4.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XT / XTE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E RTR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 3.0 Kit",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 4.0 Kit",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XE Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XE Elite Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX4 CR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Ten SCTE 2.0 Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Ten SCTE 3.0 Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity SCTE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity-T Truggy",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity-TT Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity DB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity DB Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity MT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity SCT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-B Race",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Desert Buggy XL",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Desert Buggy XL-E",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "DBXL-E 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T SCT",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Baja Rey",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Baja Rey 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Rock Rey",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Comp Crawler Race Roller",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler 2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini LST",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini LST2",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Monster Baja",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Raminator",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rammunition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-Baja",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Desert Truck",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini High-Roller",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T Pro",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T 2.0 Limited Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T Maifield Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T Phend Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Desert Buggy",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Slider Dirt Oval",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Sprint",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight Adam Drake Edition",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight Dakota Phend Edition",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight DB",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini ReadyLift SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Rockstar SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Stronghold SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro SCT",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro SCTE",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro-T Stadium Truck",
    "scale": "1/32",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro Desert Truck",
    "scale": "1/32",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-S",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-S Type-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Street Weapon",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rally Weapon",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Graphite",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Sport RTR II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Brushless",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten Rally-X",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Drift-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro Rally-X",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Dog-Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Wonder Dog-Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Wonder Dog-Fighter Limited Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-834B Wonder Dog Fighter Special Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-834B RPS Yokomo SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter Custom",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter WC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 92 Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 93",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "World Championship Special YZ-WCS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter YZ-10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter YZ-10 Mark Pavidis Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 Factory",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 II World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 III",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR Ver.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR Ver.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DT Classic",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM Worlds Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 GP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-10 GP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 SP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 K2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 MC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II SP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2 Type-J",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2 Type-J Pro USA Racer",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Worlds Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Custom",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Special V2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD BSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD CGM",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD CM",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD LCG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5P",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5 World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5WR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5WX",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD7 RS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD9",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD11",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD12",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC Mini",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 II Compact",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 M2 Type-J Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D1 Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Basic",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus Type C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Super Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Super Plus Limited Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Deep Rim Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D-Max Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D-Max Special Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DRB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DRB Hyper Drive Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DIB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DPM SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus Type C Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Master",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4W",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT300",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R Ver.2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12W",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12-C3",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4 Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BX",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BX World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Hot Dog 4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SD12 TR",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SD12 TV",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "CL Challenger 1.9",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Bulldog",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Bulldog II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "2WD Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "4WD Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Super Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Sport Seven",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Athlete",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Super Athlete",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 RR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 XR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 XR Works",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5 Prospec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6 M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6R EU",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6R US",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7 M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-6 Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-6E M-Spec Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-7R Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R World Edition",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8 ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8 ECO T.E.",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R ECO T.E.",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-10",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5T Prospec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6TR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8TR ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-2",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-3",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-2 Prospec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-4R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MSX-3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Advance",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MST-1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Cosmic",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Cosmic GP/m",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Prime 12",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Bullet TRX-10",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Radicator",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "RAD-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "The Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Street Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Tom-Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TCP",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Wildcat 4x4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hawk",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hawk-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Blue Eagle",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Blue Eagle LS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LS-II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rustler XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rustler XL-1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec XL-1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec 2.0 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec 2.0 XL-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Corvette Stingray 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford GT 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford Mustang GT 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hot Rod 1933 Coupe 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Street Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Fiero GTP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford Fiesta ST Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "VR46 Ford Fiesta ST Rally SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Fiesta",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ken Block Gymkhana Fiesta",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Rally VXL",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Mustang Boss 302",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Mustang Boss 302 Brushless",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Rally",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "XO-1",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Funny Car",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Funny Car SE TSM",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford F-150 SVT Raptor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Nitro Stampede",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Stampede XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hoss 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 2.5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 2.5R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx Classic",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Revo 2.5R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Revo Platinum Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "E-Revo",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Sportmaxx",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Sledge 6S",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Unlimited Desert Racer",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Udr",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "X-Maxx Ultimate",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Chevrolet K5 Blazer",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Ford Bronco",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Land Rover Defender",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Tactical Unit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Equipped with Traxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Chassis Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Sport Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-6 Mercedes-Benz G 63 AMG 6x6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 2WD XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 2WD LCG",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash Mudboss",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Platinum",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 BL-2s",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Brushless",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Fox",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Raptor",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "22S No Prep Drag Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Drag"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 E-Revo VXL",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Summit",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Teton",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Prerunner",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Mini Revo",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Mini Slash 4X4",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Jato 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 original",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared carbon chassis",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared plastic chassis",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Cubed CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6S",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 conversion kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-60 original",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  }
];
const MAX_PHOTO_BYTES = 12 * 1024 * 1024;
const SETUP_FIELDS = [
  'sessionDate', 'temperature', 'weather', 'surface', 'grip', 'goal', 'sessionNotes', 'tiresNotes', 'suspensionNotes', 'transmissionNotes', 'frontBallastWeight', 'rearBallastWeight', 'lateralBallastWeight', 'escSectionNotes', 'radioSectionNotes', 'radioEquipmentNotes',
  'frontTires', 'rearTires', 'inserts', 'frontInserts', 'rearInserts', 'tireTreatment', 'tireCondition',
  'frontShocks', 'frontPiston', 'frontSpring', 'frontShockCupPosition', 'rearShocks', 'rearPiston', 'rearSpring', 'rearShockCupPosition', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms', 'photoNotes', 'frontShockTower', 'rearShockTower', 'frontShockPosition', 'rearShockPosition', 'frontArmPosition', 'rearArmPosition', 'frontTrackWidth', 'rearTrackWidth', 'frontLinkLength', 'rearLinkLength',
  'gearing', 'pinionTeeth', 'spurTeeth', 'diffType', 'diffGearOil', 'diffBallGrease', 'differentials', 'frontDiffType', 'centerDiffType', 'rearDiffType', 'frontDiffOil', 'centerDiffOil', 'rearDiffOil', 'frontDiffGrease', 'centerDiffGrease', 'rearDiffGrease', 'frontBallDiffTightness', 'centerBallDiffTightness', 'rearBallDiffTightness', 'slipperPresence', 'slipper', 'ballDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'radio',
  'escModel', 'escMode', 'escMotorTiming', 'escBoost', 'escTurbo', 'escTurboDelay', 'escTiming', 'escPunch', 'escBrake', 'escDragBrake', 'escBrakeFrequency', 'escThrottleFrequency', 'escNeutralRange', 'escCutoff', 'escBec', 'escThermal', 'escReverse', 'escBrakeRate', 'escThrottleRate', 'electronicsNotes', 'esc', 'radio', 'radioSteeringDualRate', 'radioSteeringExpo', 'radioEPA', 'radioSteeringTrim', 'radioSubtrim', 'radioSteeringReverse', 'radioThrottleExpo', 'radioThrottleEPA', 'radioThrottleTrim', 'radioThrottleReverse', 'radioBrakeEPA', 'radioBrakeExpo', 'radioFailsafe', 'radioTrim', 'txModel', 'rxModel', 'lapTime', 'rating', 'notes', 'runLaps', 'averageLapTime', 'lapConsistency', 'cornerEntry', 'cornerMid', 'cornerExit', 'tractionLevel', 'stabilityLevel', 'testedChanges', 'testConclusion', 'nextTest'
];

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;
let toastTimer;
let pendingPhotos = [];
let pendingCarPhotos = [];
let editingCarId = null;
let editingSetupId = null;
let editingTrackId = null;
let setupDraftSource = null;
let skipSetupReset = false;
const emptyStateTemplate = document.getElementById('emptyStateTemplate');

let stateLoadBlocked = false;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null || raw === '') {
      return { cars: [], tracks: [], setups: [], maintenance: [], batteries: [] };
    }
    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
      throw new Error('Structure principale invalide');
    }
    for (const key of ['cars', 'tracks', 'setups', 'maintenance', 'batteries']) {
      if (saved[key] !== undefined && !Array.isArray(saved[key])) {
        throw new Error('Donnée invalide : ' + key);
      }
    }
    return {
      cars: Array.isArray(saved.cars) ? saved.cars : [],
      tracks: Array.isArray(saved.tracks) ? saved.tracks : [],
      setups: Array.isArray(saved.setups) ? saved.setups : [],
      maintenance: Array.isArray(saved.maintenance) ? saved.maintenance : [],
      batteries: Array.isArray(saved.batteries) ? saved.batteries : []
    };
  } catch (error) {
    stateLoadBlocked = true;
    console.error('Lecture des données locales impossible : original conservé, écriture bloquée.', error);
    return { cars: [], tracks: [], setups: [], maintenance: [], batteries: [] };
  }
}

function saveState() {
  if (stateLoadBlocked) {
    showToast('Données locales protégées : aucune écriture ne sera faite. Restaure une sauvegarde depuis Aide.');
    return false;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event('rc-setup-data-changed'));
    return true;
  } catch (error) {
    console.error('Impossible de sauvegarder les données locales', error);
    showToast('Stockage plein. Retire des photos ou exporte tes données.');
    return false;
  }
}

function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`; }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
}
function getCarById(id) { return state.cars.find((car) => car.id === id); }
function getTrackById(id) { return state.tracks.find((track) => track.id === id); }
function navigateToTarget(viewName, targetId = '', formId = '') {
  if (!viewName) return;
  setView(viewName, false);
  const form = formId ? document.getElementById(formId) : null;
  if (form) form.classList.remove('hidden');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      const accordion = target.closest('details');
      if (accordion) accordion.open = true;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
}
function setView(viewName, shouldScroll = true) {
  document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('[data-view]:not(.nav-item)').forEach((button) => button.addEventListener('click', () => navigateToTarget(button.dataset.view, button.dataset.navTarget || '', button.dataset.openForm || '')));
document.querySelectorAll('.add-entry').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.form).classList.toggle('hidden')));
document.querySelectorAll('[data-shortcut-view]').forEach(button => button.addEventListener('click', () => navigateToTarget(button.dataset.shortcutView, button.dataset.shortcutTarget || '', button.dataset.shortcutOpen || '')));
document.querySelectorAll('[data-go-view]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); setView(button.dataset.goView); }));
renderCarCatalogBrandPicker();
document.getElementById('carCatalogBrandPicker')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-brand]');
  if(!button)return;
  const picker=document.getElementById('carCatalogBrandPicker');
  picker.dataset.selectedBrand=picker.dataset.selectedBrand===button.dataset.brand?'':button.dataset.brand;
  updateCarCatalogOptions();
});
document.getElementById('clearCarCatalogBrand')?.addEventListener('click',()=>{
  const picker=document.getElementById('carCatalogBrandPicker');
  if(picker)picker.dataset.selectedBrand='';
  updateCarCatalogOptions();
});
document.getElementById('carCatalogDrive').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogEra').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogSearch').addEventListener('input', updateCarCatalogOptions);
document.getElementById('addCatalogCar').addEventListener('click', handleCarCatalogAdd);

updateCarCatalogOptions();
document.querySelectorAll('[data-car-tab]').forEach(button=>button.addEventListener('click',()=>setCarEditorTab(button.dataset.carTab)));
document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('carPhotosInput')?.addEventListener('change',handleCarPhotoSelection);
document.getElementById('carForm').addEventListener('reset',()=>{editingCarId=null;pendingCarPhotos=[];setTimeout(()=>{resetCarEditor();document.getElementById('carForm')?.classList.add('hidden');},0);});
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('trackForm').addEventListener('reset', () => { editingTrackId = null; const submit=document.querySelector('#trackForm button[type=\"submit\"]'); if(submit) submit.textContent='Enregistrer'; });
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('setupForm').elements.namedItem('carId').addEventListener('change',updateVehicleSpecificFields);
['frontDiffType','centerDiffType','rearDiffType','slipperPresence'].forEach(name=>document.getElementById('setupForm').elements.namedItem(name).addEventListener('change',updateVehicleSpecificFields));
document.getElementById('setupSearch')?.addEventListener('input',renderSetups);
['setupCarFilter','setupTrackFilter','setupSurfaceFilter','setupGripFilter','setupDateFrom','setupDateTo'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderSetups));
document.getElementById('compareSetupsButton')?.addEventListener('click',compareSetups);
document.getElementById('calculateGearingButton')?.addEventListener('click',calculateGearing);
document.getElementById('diagnoseSetupButton')?.addEventListener('click',runSetupDiagnosis);
document.getElementById('diagnosisSaveProposal')?.addEventListener('click',saveToolAssistantProposal);
['diagnosisCar','diagnosisSetup','diagnosisTrack','diagnosisGrip','diagnosisDrive','diagnosisSeverity'].forEach(id=>document.getElementById(id)?.addEventListener('change',()=>{if(id==='diagnosisCar'||id==='diagnosisSetup')populateAssistantToolSelectors();if(document.getElementById('diagnosisSymptom')?.value)runSetupDiagnosis();}));
document.getElementById('diagnosisSymptom')?.addEventListener('change',runSetupDiagnosis);
document.getElementById('maintenanceCar')?.addEventListener('change',renderMaintenanceList);
document.getElementById('batteryForm')?.addEventListener('submit',handleBatterySubmit);
document.getElementById('batteryLogForm')?.addEventListener('submit',handleBatteryLog);
document.getElementById('maintenanceForm')?.addEventListener('submit',event=>{
 event.preventDefault();
 const carId=document.getElementById('maintenanceCar').value,part=document.getElementById('maintenancePart').value;
 if(!carId||!part)return;
 state.maintenance=Array.isArray(state.maintenance)?state.maintenance:[];
 state.maintenance.unshift({id:uid('maintenance'),carId,part,workType:document.getElementById('maintenanceWorkType').value,date:document.getElementById('maintenanceDate').value,sessions:Number(document.getElementById('maintenanceSessions').value||0),next:Number(document.getElementById('maintenanceNext').value||0),replacedParts:document.getElementById('maintenanceReplacedParts').value.trim(),notes:document.getElementById('maintenanceNotes').value.trim()});
 if(!saveState())return;
 document.getElementById('maintenancePart').value='';document.getElementById('maintenanceWorkType').value='Entretien';document.getElementById('maintenanceSessions').value='0';document.getElementById('maintenanceNext').value='';document.getElementById('maintenanceReplacedParts').value='';document.getElementById('maintenanceNotes').value='';document.getElementById('maintenanceDate').value=new Date().toISOString().slice(0,10);renderMaintenanceList();showToast('Intervention enregistrée.');
});
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.getElementById('importSetupInput')?.addEventListener('change', (event) => { importSingleSetup(event.target.files?.[0]); event.target.value = ''; });
document.getElementById('pasteSharedSetupLinkButton')?.addEventListener('click',pasteSharedSetupLinkToField);
document.getElementById('importSharedSetupLinkButton')?.addEventListener('click',()=>pasteAndImportSharedLink());
document.querySelectorAll('form').forEach(form=>form.addEventListener('reset',()=>{const keepOpen=form.id==='setupForm'&&form.dataset.preserveOnReset==='true';form.dataset.preserveOnReset='false';setTimeout(()=>{if(keepOpen){skipSetupReset=false;return;}form.classList.add('hidden');if(form.id==='setupForm'){pendingPhotos=[];editingSetupId=null;setupDraftSource=null;renderPhotoPreviews();const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer le setup';}},0);}));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

function updateCarBrandPicker(){const select=document.getElementById('carBrand');if(!select)return;const value=(select.value||'').trim();if(value&&!Array.from(select.options).some(option=>option.value===value)){const option=document.createElement('option');option.value=value;option.textContent=value;select.add(option);}select.value=value;}
document.getElementById('assistantSymptom')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantPhase')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSeverity')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSaveProposal')?.addEventListener('click',saveAssistantProposal);
renderAll();
processIncomingShareLink();
populateMaintenanceCars();
renderBatteries();
document.getElementById('maintenanceDate').value=new Date().toISOString().slice(0,10);
updateCarBrandPicker();
updateVehicleSpecificFields();
setView('dashboard', false);
registerServiceWorker();
setupInstallPrompt();
if (stateLoadBlocked) {
  showToast('Lecture des données impossible : elles sont conservées sans écrasement. Consulte Aide pour restaurer une sauvegarde.');
}

