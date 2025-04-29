/* eslint react/prop-types: 0 */
import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {AntDesignIcon, Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import Modal from '../../src/index.js'
import {getParams, setParams} from '../config.js'
import {getPhoto, getPhotos} from '../data/photos.js'
import LoremIpsum from '../utils/LoremIpsum.js'

const photos = getPhotos({length: 30})

const ArticleURLState = ({className}) => {
  const {id} = getParams({uuid: v => v, id: v => v})
  const [photo, setPhoto] = useState(id ? getPhoto({id}) : undefined)

  const closeModalRef = useRef(null)

  return (
    <Article className={className}>
      <H2>Url management</H2>
      <Paragraph>
        By using the controlled status the modal can get subscribed its behavior to the URL query parameters .
      </Paragraph>
      <Modal
        isOpen={!!photo}
        onClose={() => {
          setParams({})
          setPhoto(null)
        }}
      >
        <div className="container">
          {photos.map(photoItem => {
            const photo = getPhoto({id: photoItem.id})
            return (
              <button
                key={photo.id}
                className="item"
                style={{border: 'none', background: 'none', cursor: 'pointer'}}
                onClick={() => {
                  setPhoto(photo)
                  setParams({id: photo.id})
                }}
              >
                <img
                  src={`${photo?.urls.small}`}
                  alt={photo?.alt_description}
                  style={{width: '100%', height: 'auto'}}
                />
              </button>
            )
          })}
        </div>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content
            onEscapeKeyDown={() => {
              setParams({})
              setPhoto(null)
            }}
            onPointerDownOutside={() => {
              setParams({})
              setPhoto(null)
            }}
            onOpenAutoFocus={e => {
              e.preventDefault()
              closeModalRef.current?.focus()
            }}
            onOpenChange={() => {}}
          >
            <PrimitiveVisuallyHidden>
              <Modal.Header>
                <Modal.Title style={{textTransform: 'capitalize'}}>{photo?.alt_description}</Modal.Title>
              </Modal.Header>
            </PrimitiveVisuallyHidden>
            <Modal.Body style={{display: 'flex', flexDirection: 'column'}} isInset>
              <img
                src={`${photo?.urls.full}`}
                alt={photo?.alt_description}
                style={{width: '100%', height: 'auto', maxHeight: 600, objectFit: 'contain'}}
              />
              <div
                style={{
                  paddingBlock: 16,
                  paddingInline: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 'bolder'
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <img
                      style={{borderRadius: '100%'}}
                      src={photo?.user.profile_image.small}
                      alt={photo?.user.first_name}
                    />
                    {photo?.user.username}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <AtomIcon>
                      <AntDesignIcon icon="AiFillHeart" style={{color: 'currentColor'}} />
                    </AtomIcon>
                    {photo?.likes} likes
                  </div>
                </div>
                <Modal.ScrollArea isInset>
                  <Modal.Description>{photo?.description}</Modal.Description>
                  <LoremIpsum count={3} />
                </Modal.ScrollArea>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div style={{display: 'flex', width: '100%', gap: 8}}>
                <AtomButton
                  disabled={!photo?.previousId}
                  onClick={() => {
                    const previousPhoto = getPhoto({id: photo.previousId})
                    setPhoto(previousPhoto)
                    setParams({id: photo.previousId})
                  }}
                >
                  ←
                </AtomButton>

                <AtomButton
                  ref={closeModalRef}
                  style={{flexGrow: 1}}
                  onClick={() => {
                    setPhoto(null)
                    setParams({})
                  }}
                >
                  Close
                </AtomButton>

                <AtomButton
                  disabled={!photo?.nextId}
                  onClick={() => {
                    const nextPhoto = getPhoto({id: photo.nextId})
                    setPhoto(nextPhoto)
                    setParams({id: photo.nextId})
                  }}
                >
                  →
                </AtomButton>
              </div>
            </Modal.Footer>
            <Modal.CloseIconButton
              ariaLabel="close the modal"
              onClick={() => {
                setParams({})
                setPhoto(null)
              }}
            />
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    </Article>
  )
}

ArticleURLState.propTypes = {
  className: PropTypes.string
}

export default ArticleURLState
