import React from "react";

function ROCLegend() {
  return (
    <>
      <div>
        <h5>
          <i className="iconify" data-icon="emojione-monotone:fork-and-knife" data-inline="false"></i>{" "}
          ABSTENTION FROM FOOD
        </h5>
        <p className="mt-0">
          <strong>Refrain from: </strong> All food
        </p>
      </div>
      <div>
        <h5>
          <i
            className="iconify"
            data-icon="mdi:bolnisi-cross"
            data-inline="false"
          ></i>{" "}
          STRICT FAST
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> Raw vegetables, fruit and bread
          <br />
          <strong>Refrain from: </strong> Cooked food, meat, fish, oil, wine,
          dairy and eggs
        </p>
      </div>

      <div>
        <h5>
          <i
            className="iconify"
            data-icon="emojione:pot-of-food"
            data-inline="false"
          ></i>{" "}
          FOOD WITHOUT OIL (DRY FAST)
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> Cooked vegetables, fruit, legumes and bread
          <br />
          <strong>Refrain from: </strong> Fried foods, meat, fish, oil, wine,
          dairy and eggs
        </p>
      </div>

      <div>
        <h5>
          <i
            className="iconify"
            data-icon="noto:grapes"
            data-inline="false"
          ></i>{" "}
          WINE AND OIL
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> All of DRY FAST, wine and oil
          <br />
          <strong>Refrain from: </strong> Meat, fish, dairy and eggs
        </p>
      </div>

      <div>
        <h5>
          <i
            className="iconify"
            data-icon="emojione:letter-c"
            data-inline="false"
          ></i>{" "}
          WINE, OIL AND CAVIAR
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> All of DRY FAST, wine, oil and caviar
          <br />
          <strong>Refrain from: </strong> Meat, fish, dairy and eggs
        </p>
      </div>

      <div>
        <h5>
          <i className="iconify" data-icon="noto:fish" data-inline="false"></i>{" "}
          WINE, OIL AND FISH
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> All of DRY FAST, wine, oil, caviar and fish
          <br />
          <strong>Refrain from: </strong> Meat, dairy and eggs
        </p>
      </div>

      <div>
        <h5>
          <i
            className="iconify"
            data-icon="noto:cheese-wedge"
            data-inline="false"
          ></i>{" "}
          Meat Fast
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> All of DRY FAST, wine, oil, fish, eggs and
          dairy
          <br />
          <strong>Refrain from: </strong> Meat
        </p>
      </div>
    </>
  );
}

export default ROCLegend;
