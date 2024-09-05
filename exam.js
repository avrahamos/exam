let militaryUnit = {
  name: "1st Infantry Division",

  location: "Fort Bragg, North Carolina, USA",

  establishmentDate: "1941-06-01",

  unitType: "Infantry Division",

  commandStructure: {
    commandingOfficer: {
      rank: "Major General",

      name: "John Doe",

      contact: {
        email: "john.doe@example.com",

        phone: "+1-555-123-4567",
      },
    },

    executiveOfficer: {
      rank: "Colonel",

      name: "Jane Smith",

      contact: {
        email: "jane.smith@example.com",

        phone: "+1-555-987-6543",
      },
    },

    chiefOfStaff: {
      rank: "Brigadier General",

      name: "Robert Brown",

      contact: {
        email: "robert.brown@example.com",

        phone: "+1-555-555-1234",
      },
    },
  },

  personnel: [
    {
      id: 1,

      name: "Private First Class Alice Johnson",

      rank: "Private First Class",

      role: "Rifleman",

      contact: {
        email: "alice.johnson@example.com",

        phone: "+1-555-000-1111",
      },
    },

    {
      id: 2,

      name: "Sergeant Michael White",

      rank: "Sergeant",

      role: "Squad Leader",

      contact: {
        email: "michael.white@example.com",

        phone: "+1-555-000-2222",
      },
    },
  ],

  equipment: {
    vehicles: [
      {
        type: "M1 Abrams Tank",

        quantity: 20,

        status: "Operational",
      },

      {
        type: "Humvee",

        quantity: 50,

        status: "Operational",
      },
    ],

    firearms: [
      {
        type: "M16 Rifle",

        quantity: 500,

        status: "Operational",
      },

      {
        type: "M249 SAW",

        quantity: 100,

        status: "Operational",
      },
    ],

    otherEquipment: [
      {
        type: "Night Vision Goggles",

        quantity: 150,

        status: "Operational",
      },

      {
        type: "Field Radios",

        quantity: 100,

        status: "Operational",
      },
    ],
  },

  missions: [
    {
      missionName: "Operation Desert Storm",

      startDate: "1991-01-17",

      endDate: "1991-02-28",

      description: "Combat operation to liberate Kuwait from Iraqi occupation.",
    },

    {
      missionName: "Operation Enduring Freedom",

      startDate: "2001-10-07",

      endDate: "2014-12-28",

      description:
        "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
    },
  ],

  trainingPrograms: [
    {
      programName: "Basic Combat Training",

      duration: 10,

      focus:
        "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
    },

    {
      programName: "Advanced Individual Training",

      duration: 12,

      focus:
        "Specialized training for specific military occupational specialties.",
    },
  ],

  history: [
    {
      eventDate: "1941-06-01",

      eventDescription: "Establishment of the 1st Infantry Division.",
    },

    {
      eventDate: "1944-06-06",

      eventDescription: "Participated in the D-Day landings in Normandy.",
    },
  ],

  currentDeployment: {
    location: "Middle East",

    mission: "Counter-terrorism operations",

    startDate: "2024-01-01",

    estimatedEndDate: "2024-12-31",
  },
};

function mission1(militaryUnit) {
  const chiefOfStaff = militaryUnit.commandStructure.chiefOfStaff;

  return `${chiefOfStaff.rank}, ${chiefOfStaff.name}, ${chiefOfStaff.contact.phone}`;
}

function mission2(militaryUnit) {
  return militaryUnit.personnel.length.toString();
}

function mission3(newDeployment, militaryUnit) {
  militaryUnit.history.push({
    eventDate: militaryUnit.currentDeployment.startDate,
    eventDescription: `Deployment to ${militaryUnit.currentDeployment.location} for ${militaryUnit.currentDeployment.mission}`,
  });

  militaryUnit.currentDeployment = newDeployment;

  return militaryUnit;
}

function mission4(newFirearm, militaryUnit) {
  const existingFirearmIndex = militaryUnit.equipment.firearms.findIndex(
    (firearm) =>
      firearm.type === newFirearm.type && firearm.status === newFirearm.status
  );

  if (existingFirearmIndex !== -1) {
    militaryUnit.equipment.firearms[existingFirearmIndex].quantity +=
      newFirearm.quantity;
  } else {
    militaryUnit.equipment.firearms.push(newFirearm);
  }

  return militaryUnit;
}

function mission5(militaryUnit) {
  const totalDuration = militaryUnit.trainingPrograms.reduce(
    (sum, program) => sum + program.duration,
    0
  );
  return totalDuration.toString();
}

console.log("Chief of Staff details:", mission1(militaryUnit));

console.log("Number of personnel in the unit :", mission2(militaryUnit));

const newDeployment = {
  location: "Gaza",
  mission: "Kidnapped rescue",
  startDate: "2025-01-01",
  estimatedEndDate: "2025-12-31",
};
const updatedUnit = mission3(newDeployment, militaryUnit);

console.log(updatedUnit.currentDeployment);
console.log(updatedUnit.history[updatedUnit.history.length - 1]);

const newFirearm = {
  type: "Field Radios",

  quantity: 1000,

  status: "Operational",
};
const unitWithNewFirearm = mission4(newFirearm, militaryUnit);
console.log(unitWithNewFirearm.equipment.firearms);

console.log(mission5(militaryUnit));
