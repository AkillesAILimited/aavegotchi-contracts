import { ethers } from "hardhat";
import { expect } from "chai";
import { SvgViewsFacet } from "../../typechain";
import { upgrade } from "../../scripts/upgrades/upgrade-sideViewsExceptions";
import { maticDiamondAddress } from "../../scripts/helperFunctions";

export async function main() {
  const diamondAddress = maticDiamondAddress;
  let svgViewsFacet: SvgViewsFacet;

  const rightExceptions: any[] = [];
  const leftExceptions: any[] = [];
  const backExceptions: any[] = [];

  svgViewsFacet = (await ethers.getContractAt(
    "SvgViewsFacet",
    diamondAddress
  )) as SvgViewsFacet;

  await upgrade();

  //hand exceptions
  rightExceptions.push(
    {
      itemId: 201,
      side: 4,
      exceptionBool: true,
    },
    {
      itemId: 217,
      side: 4,
      exceptionBool: true,
    }
  );
  leftExceptions.push(
    {
      itemId: 201,
      side: 5,
      exceptionBool: true,
    },
    {
      itemId: 217,
      side: 5,
      exceptionBool: true,
    }
  );

  console.log("Testing");
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
