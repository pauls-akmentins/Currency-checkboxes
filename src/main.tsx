import React, { useState } from "react";
import { currencies } from "./common/constants";
import AllCurrencies from "./layout/allCurrencies/AllCurrencies";
import MainContainer from "./layout/mainContainer/MainContainer";
import SelectedCurrencies from "./layout/selectedCurrencies/SelectedCurrencies";
import Checkbox from "./shared/checkbox/Checkbox";
import SelectedCheckbox from "./shared/selectedCheckbox/SelectedCheckbox";

const Main: React.FC = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const handleSelectCurrency = (currentCurrency: string) => {
    const isCurrencySelected = selectedCurrencies.includes(currentCurrency);
    if (!isCurrencySelected) {
      setSelectedCurrencies([...selectedCurrencies, currentCurrency]);
    } else {
      const currentlySelectedCurrencies = selectedCurrencies.filter(
        (selectedCurrency) => selectedCurrency !== currentCurrency
      );
      setSelectedCurrencies(currentlySelectedCurrencies);
    }
  };

  const handleRemoveCurrency = (currentCurrency: string) => {
    const currentlySelectedCurrencies = selectedCurrencies.filter(
      (selectedCurrency) => selectedCurrency !== currentCurrency
    );
    setSelectedCurrencies(currentlySelectedCurrencies);
  };

  return (
    <>
      <MainContainer>
        <SelectedCurrencies>
          {selectedCurrencies.map((selectedCurrency) => (
            <SelectedCheckbox
              selectedCurrency={selectedCurrency}
              onRemove={() => handleRemoveCurrency(selectedCurrency)}
            />
          ))}
        </SelectedCurrencies>
        <AllCurrencies>
          {currencies.map((currency, index) => (
            <Checkbox
              key={`${currency}-${index}`}
              checkboxContent={currency}
              isChecked={selectedCurrencies.includes(currency)}
              onClick={() => handleSelectCurrency(currency)}
            />
          ))}
        </AllCurrencies>
      </MainContainer>
    </>
  );
};

export default Main;
