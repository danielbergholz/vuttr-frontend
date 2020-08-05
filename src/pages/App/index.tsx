/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useUser } from '../../context/user';
import { useToast } from '../../context/toast';

import ProfileButton from '../../components/LoginButton';
import bossabox from '../../assets/bossabox.svg';
import plus from '../../assets/plus.svg';
import spinner from '../../assets/spinner.svg';
import x from '../../assets/x.svg';
import search from '../../assets/search.svg';
import {
  Container,
  NavBar,
  Section,
  Buttons,
  ModalButtons,
  ModalButton,
  SearchBar,
  AddNewTool,
  Tool,
  TitleFlexbox,
  LoadingSpinner,
  ModalContainer,
  Pagination,
} from './styles';

interface ToolData {
  id: number;
  user_id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ResponseData {
  total: string;
  perPage: number;
  page: number;
  lastPage: number;
  data: ToolData[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(1);
  const [page, setPage] = useState(1);
  const [pageArray, setPageArray] = useState([0]);
  const [lastPage, setLastPage] = useState(1);
  const [modal, setModal] = useState(0);
  const [modalType, setModalType] = useState<'update' | 'create' | 'delete'>(
    'update',
  );
  const [response, setResponse] = useState<ResponseData>({} as ResponseData);
  const [selectedTool, setSelectedTool] = useState<ToolData>({} as ToolData);
  const [formTitle, setFormTitle] = useState('');
  const [formLink, setFormLink] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formTags, setFormTags] = useState('');

  const history = useHistory();
  const { user, jwt, clearLocalStorage } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    setLoading(1);

    api
      .get<ResponseData>(`/tool?page=${page}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        const { data } = res;
        setResponse(data);
        setLastPage(data.lastPage === 0 ? 1 : data.lastPage);
        setPageArray(
          new Array(data.lastPage === 0 ? 1 : data.lastPage).fill(0),
        );
        setLoading(0);
      })
      .catch((err) => {
        if (err.response?.data?.error?.status === 401) {
          clearLocalStorage();
          toast('Your session has expired, please login again', 'warning');
          history.push('/login');
        } else {
          clearLocalStorage();
          toast('The server is offline, please try again later', 'error');
          history.push('/login');
        }
        setLoading(0);
      });
  }, [jwt, page, clearLocalStorage, history, toast]);

  const reload = useCallback(
    (pageParam = 1) => {
      setLoading(1);
      setPage(pageParam);

      api
        .get<ResponseData>(`/tool?page=${pageParam}`, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((res) => {
          const { data } = res;
          setResponse(data);
          setLastPage(data.lastPage === 0 ? 1 : data.lastPage);
          setPageArray(
            new Array(data.lastPage === 0 ? 1 : data.lastPage).fill(0),
          );
          setLoading(0);
        })
        .catch((err) => {
          if (err.response.data.error.status === 401) {
            clearLocalStorage();
            toast('Your session has expired, please login again', 'warning');
            history.push('/login');
          } else {
            clearLocalStorage();
            toast('The server is offline, please try again later', 'error');
            history.push('/login');
          }
          setLoading(0);
        });
    },
    [history, jwt, toast, clearLocalStorage],
  );

  const handleCreateTool = useCallback(() => {
    setModal(0);

    if (!formTitle || !formLink || !formTags) {
      toast('Fields "title", "link" and "tags" are required', 'warning');
      return;
    }

    const tool = {
      title: formTitle,
      link: formLink,
      description: formDescription,
      tags: formTags.split(' '),
    };

    api
      .post('/tool', tool, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(() => {
        toast('Tool created successfully', 'success');
        reload(page);
      })
      .catch((err) => {
        toast(
          err.response.data.error || `Tool ${tool.title} could not be created`,
          'error',
        );
      });
  }, [
    formTitle,
    formDescription,
    formTags,
    formLink,
    toast,
    jwt,
    reload,
    page,
  ]);

  const handleUpdateTool = useCallback(() => {
    const updatedTool = {
      id: selectedTool.id,
      title: formTitle,
      link: formLink,
      description: formDescription,
      tags: formTags.split(' '),
    };

    setLoading(1);
    setModal(0);

    api
      .put('/tool', updatedTool, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(() => {
        toast('Tool updated successfully', 'success');
        reload(page);
      })
      .catch((err) => {
        toast(
          err.response.data.error ||
            `Tool ${updatedTool.title} could not be updated`,
          'error',
        );
        setLoading(0);
      });
  }, [
    selectedTool,
    formTitle,
    formDescription,
    formTags,
    formLink,
    toast,
    jwt,
    reload,
    page,
  ]);

  const handleDeleteTool = useCallback(() => {
    setLoading(1);
    setModal(0);

    api
      .delete(`/tool/${selectedTool.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(() => {
        toast(`Tool ${selectedTool.title} deleted successfully`, 'success');
        reload();
      })
      .catch((err) => {
        toast(
          err.response.data.error ||
            `Tool ${selectedTool.title} could not be deleted`,
          'error',
        );
        setLoading(0);
      });
  }, [selectedTool, toast, jwt, reload]);

  const handleSearchTag = useCallback(
    (e) => {
      if (e.target.value) {
        setLoading(1);

        let formattedTags: string = e.target.value.replace(/ /g, ',');
        while (formattedTags[formattedTags.length - 1] === ',') {
          formattedTags = formattedTags.slice(0, -1);
        }

        api
          .get(`/tool?tag=${formattedTags}`, {
            headers: { Authorization: `Bearer ${jwt}` },
          })
          .then((res) => {
            const { data } = res;
            const fakeResponse = { data };
            setResponse(fakeResponse as ResponseData);
            setPage(1);
            setLastPage(1);
            setPageArray([0]);
            setLoading(0);
          })
          .catch((err) => {
            toast(
              err.response.data.error ||
                `The tags ${e.target.value} could not be found`,
              'warning',
            );
            setLoading(0);
          });
      } else {
        reload(page);
      }
    },
    [page, reload, jwt, toast],
  );

  const handleOpenUpdateModal = useCallback((tool: ToolData) => {
    setModal(1);
    setModalType('update');
    setSelectedTool(tool);
    setFormTitle(tool.title);
    setFormLink(tool.link);
    setFormDescription(tool.description);
    setFormTags(tool.tags.join(' '));
  }, []);

  const handleOpenCreateModal = useCallback(() => {
    setModal(1);
    setModalType('create');
    setFormTitle('');
    setFormLink('');
    setFormDescription('');
    setFormTags('');
  }, []);

  const handleOpenDeleteModal = useCallback((tool: ToolData) => {
    setModal(1);
    setSelectedTool(tool);
    setModalType('delete');
  }, []);

  const changePage = useCallback(
    (pageParam: number) => {
      setPage(pageParam);
      reload(pageParam);
    },
    [reload],
  );

  return (
    <>
      {modalType !== 'delete' ? (
        <ModalContainer isModalOpen={modal}>
          <button type="button" onClick={(): void => setModal(0)}>
            <img src={x} alt="" />
          </button>
          <p>Name</p>
          <input
            type="text"
            name="title"
            value={formTitle}
            onChange={(e): void => setFormTitle(e.target.value)}
          />
          <p>Link</p>
          <input
            type="text"
            name="link"
            value={formLink}
            onChange={(e): void => setFormLink(e.target.value)}
          />
          <p>Description</p>
          <textarea
            rows={3}
            name="description"
            value={formDescription}
            onChange={(e): void => setFormDescription(e.target.value || '')}
          />
          <p>Tags</p>
          <input
            type="text"
            name="tags"
            value={formTags}
            onChange={(e): void => setFormTags(e.target.value)}
          />
          {modalType === 'update' ? (
            <ModalButtons>
              <div onClick={handleUpdateTool}>
                <ProfileButton
                  color="#10B26C"
                  hover="#12DB89"
                  loading={loading}
                >
                  Update tool
                </ProfileButton>
              </div>
              <div onClick={(): void => setModalType('delete')}>
                <ProfileButton
                  color="#CC4C4C"
                  hover="#F95E5A"
                  loading={loading}
                >
                  Delete tool
                </ProfileButton>
              </div>
            </ModalButtons>
          ) : (
            <ModalButton>
              <div onClick={handleCreateTool}>
                <ProfileButton
                  color="#10B26C"
                  hover="#12DB89"
                  loading={loading}
                >
                  Create tool
                </ProfileButton>
              </div>
            </ModalButton>
          )}
        </ModalContainer>
      ) : (
        <ModalContainer isModalOpen={modal}>
          <button type="button" onClick={(): void => setModal(0)}>
            <img src={x} alt="" />
          </button>
          <h2>{`Are you sure you want to delete ${selectedTool.title}?`}</h2>
          <ModalButton>
            <div onClick={handleDeleteTool}>
              <ProfileButton color="#CC4C4C" hover="#F95E5A" loading={loading}>
                Delete tool
              </ProfileButton>
            </div>
          </ModalButton>
        </ModalContainer>
      )}
      <Container isModalOpen={modal}>
        <NavBar>
          <img src={bossabox} alt="Logo Bossabox" />
          <Link to="profile">
            <ProfileButton>Profile</ProfileButton>
          </Link>
        </NavBar>
        <Section>
          <h1>VUTTR</h1>
          <h2>
            Welcome back
            {` ${user.name}`}
          </h2>
          <Buttons>
            <SearchBar>
              <img src={search} alt="Logo Bossabox" />
              <input
                type="text"
                placeholder="Search by tags"
                onBlur={handleSearchTag}
              />
            </SearchBar>
            <AddNewTool onClick={handleOpenCreateModal}>
              <img src={plus} alt="Logo Bossabox" />
              <p>Add new tool</p>
            </AddNewTool>
          </Buttons>
          {loading === 0 ? (
            response.data.map((tool) => (
              <Tool key={tool.id}>
                <TitleFlexbox>
                  <div onClick={(): void => handleOpenUpdateModal(tool)}>
                    <h1>{tool.title}</h1>
                  </div>
                  <button
                    type="button"
                    onClick={(): void => handleOpenDeleteModal(tool)}
                  >
                    <img src={x} alt="" />
                  </button>
                </TitleFlexbox>
                <div onClick={(): void => handleOpenUpdateModal(tool)}>
                  <p>{tool.description}</p>
                  <span>{tool.tags.join(' ')}</span>
                </div>
              </Tool>
            ))
          ) : (
            <LoadingSpinner>
              <img src={spinner} alt="Loading..." />
            </LoadingSpinner>
          )}
        </Section>
      </Container>
      <Pagination page={page} lastPage={lastPage}>
        <strong onClick={(): void => changePage(page - 1)}>
          &#9666; Previous
        </strong>
        {pageArray.map((_, index) => (
          <span key={String(index)} onClick={(): void => changePage(index + 1)}>
            {index + 1}
          </span>
        ))}
        <strong onClick={(): void => changePage(page + 1)}>Next &#9656;</strong>
      </Pagination>
    </>
  );
};

export default App;
