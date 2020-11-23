import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import useOnclickOutside from 'react-cool-onclickoutside'

const NavSearch = () => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => search === true  ? setSearch(false) : null

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  return (
    <Container className='d-flex justify-content-center h-100' ref={ref}>
      <Form
        className={
          search === false
            ? 'searchbar fadeOutWidth'
            : search === true
            ? 'searchbar fadeInWidth'
            : 'searchbar'
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? 'search-input fadeIn'
                : search === false
                ? 'search-input fadeOut'
                : 'search-input'
            }
            type='text'
            name=''
            placeholder='Search...'
          />
        )}
        <div
          className={
            search === true
              ? 'icon-bg fadeOut'
              : search === false
              ? 'icon-bg fadeIn'
              : 'icon-bg'
          }
        >
          <FontAwesomeIcon
            onClick={toggle}
            className={
              search === true
                ? 'search-icon fadeOut'
                : search === false
                ? 'search-icon fadeIn'
                : 'search-icon'
            }
            icon={faSearch}
          />
        </div>
      </Form>
    </Container>
  )
}

export default NavSearch
