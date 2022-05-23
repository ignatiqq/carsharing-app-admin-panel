import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import type { IOption, ISelect } from "./types";
import styles from "./Select.module.scss";


const Select: React.FC<ISelect> = (
  {
    options,
    searchPlaceholder = "Start typing anything",
    label, 
    selected, 
    clickHandler,
    customLabel = "label",
    customValue = "value",
    selectClassName,
    dropdownClassName,
    dataHolder,
    className
  }
  ) => {

  const [optionLabel, setOptionLabel] = useState<string>(customLabel);
  const [optionValue, setOptionValue] = useState<string>(customValue);
  const [optionsToShow, setOptionsToShow] = useState<Array<any> | null>(null); 
  const [optionSearch, setOptionSearch] = useState<string>("");
  const [selectDropdownOpened, setSelectDropdownOpened] = useState<boolean>(false);

  useEffect(() => {
    if(options) {
      setOptionsToShow(options)
    }
  }, [options])

  useEffect(() => {
    if(options) {
      console.log(options)
      const filterBySearch = (item: IOption) => item[optionLabel as keyof IOption].toLowerCase().includes(optionSearch.toLowerCase());
      setOptionsToShow(options.filter(filterBySearch))
    }
  }, [optionSearch])

  useEffect(() => {
    if(customLabel) {
      setOptionLabel(customLabel)
    }
    if(customValue) { 
      setOptionValue(customValue)
    }
  }, [customLabel, customValue])

  const searchOptionHandler = (e: React.ChangeEvent) => {
    setOptionSearch((e.target as HTMLInputElement).value);
  }

  const openSelectDropdownHandler = () => {
    setSelectDropdownOpened(true);
  }

  const closeSelectDropdownHandler = () => {
    setSelectDropdownOpened(false);
    setOptionSearch("");
  }

  const selectCityHandler = (item: IOption) => {
    clickHandler(item)
    setOptionSearch("");
    setSelectDropdownOpened(false);
  }

  const inputValue = selectDropdownOpened ? optionSearch : selected ? selected[optionLabel] : optionSearch;

  return (
    <div className={classNames(styles.wrapper, className, {
      [styles.selectWrapper__active]: selectDropdownOpened
    })}>
      <label className={styles.inputLabel} htmlFor='search-input'>{label}</label>
      <div className={styles.selectWrapper}>
        <input
          name="search-input" 
          type="search" 
          value={inputValue} 
          onChange={searchOptionHandler} 
          placeholder={searchPlaceholder}
          className={classNames(styles.input, selectClassName)}
          onFocus={openSelectDropdownHandler}
          onBlur={closeSelectDropdownHandler}
        />
        <div className={classNames(styles.optionWrapper, dropdownClassName, {
          [styles.optionWrapperOpen]: selectDropdownOpened
        })}>
          {
            dataHolder ? 
            dataHolder :
            optionsToShow && optionsToShow.length > 0 ?
            optionsToShow.map((item) => (  
              <button 
                className={classNames(styles.option, {
                  [styles.optionActive]: item[optionValue] === selected && selected[optionValue]
                })} 
                onMouseDown={() => selectCityHandler(item)}
                key={item[optionValue]} 
                value={item[optionValue]}
              >
                {item[optionLabel]}
              </button>
            ))
            :
            <div className={styles.notFound}>
              По вашему запросу ничего не найдено :(
            </div>
          }     
        </div>
      </div>
    </div>
  )
}

export default React.memo(Select);