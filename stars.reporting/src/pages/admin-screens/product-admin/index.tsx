import EditIcon from '@/assets/images/edit-icon.svg';
import MeasureViewIcon from '@/assets/images/visibility.svg';
import ProductAdminEditMeasure from '@/components/product-admin-edit-measure';
import ProductAdminMeasure from '@/components/product-admin-measure';
import ProductAdminSidePanel from '@/components/product-admin-side-panel';
import { fetchLookupData } from '@/redux/lookup';
import { MeasureType, fetchMeasureData } from '@/redux/measure';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclButton, AclIcon, AclSpinner } from '@acl/ui';
import React, { useCallback, useEffect, useState } from 'react';
import { CATEGORIES, PAGE_SIZE } from './product-admin.constant';
import ProductAdminStyles from './product-admin.module.css';

const ProductAdmin = () => {
  const dispatch = useAppDispatch();
  const measureData = useAppSelector((state) => state.measure);
  const lookupData = useAppSelector((state) => state.lookup);
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
  const [accordionExpanded, setAccordionExpanded] = useState<{ [key: string]: boolean }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [readOnlyStatuses, setReadOnlyStatuses] = useState<{ [key: string]: boolean }>({});
  const [selectedMeasure, setSelectedMeasure] = useState<MeasureType | null>(null);
  const [visibleData, setVisibleData] = useState<MeasureType[]>([]);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<MeasureType[] | undefined>(undefined);

  const loadMoreData = useCallback(() => {
    if (!filteredData || loadingMore) return;

    setLoadingMore(true);
    const nextPageData = filteredData.slice(visibleData.length, visibleData.length + PAGE_SIZE);
    setVisibleData((prevData) => [...prevData, ...nextPageData]);
    setTimeout(() => {
      setLoadingMore(false);
    }, 5000);
  }, [filteredData, visibleData, loadingMore]);

  useEffect(() => {
    const filtered: MeasureType[] | undefined =
      selectedCategory !== CATEGORIES[0]
        ? measureData.data?.filter((measure) => measure.categoryName?.trim() === selectedCategory)
        : measureData.data;
    setFilteredData(filtered);

    if (filtered?.length) {
      setVisibleData(filtered.slice(0, PAGE_SIZE));
    }
  }, [measureData.data, selectedCategory]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop - e.currentTarget.clientHeight < 1;

    if (bottom && !loadingMore && visibleData.length < (filteredData ? filteredData.length : 0)) {
      loadMoreData();
    }
  };

  const handleAccordionChange = (groupName: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setAccordionExpanded({
      ...accordionExpanded,
      [groupName]: isExpanded,
    });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category?.trim());
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeasure(null);
    setIsEdit(false);

    if (selectedMeasure) {
      setReadOnlyStatuses({ ...readOnlyStatuses, [selectedMeasure.measureId]: true });
    }
  };

  const handleEditClick = (measure: MeasureType) => {
    setSelectedMeasure(measure);
    setIsEdit(true);
  };

  const getCategories = (): string[] => {
    const uniqueCategoriesSet = new Set([...CATEGORIES]);

    measureData.data?.forEach((measure) => {
      const trimmedCategory = measure.categoryName?.trim();

      if (trimmedCategory) {
        uniqueCategoriesSet.add(trimmedCategory);
      }
    });

    const uniqueCategories = Array.from(uniqueCategoriesSet);

    return uniqueCategories;
  };

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(fetchMeasureData({ measureYear: 2024 }));
    }
  }, [dispatch, isModalOpen]);

  useEffect(() => {
    if (selectedMeasure && isEdit) {
      setIsModalOpen(true);
    }
  }, [selectedMeasure, isEdit]);

  useEffect(() => {
    dispatch(fetchLookupData({ measureYear: 2024 }));
  }, [dispatch]);
  //Todos: Needs to handle visible data refresh case
  // useEffect(() => {
  //   const initialLoad = async (): Promise<void> => {
  //     await dispatch(fetchLookupData({ measureYear: 2024 }));
  //     await dispatch(fetchMeasureData({ measureYear: 2024 }));
  //   };
  //   initialLoad();
  // }, [dispatch]);

  return (
    <>
      {measureData.loading || lookupData.loading ? (
        <AclSpinner />
      ) : (
        <div className={ProductAdminStyles['outer-container']}>
          <div className={ProductAdminStyles['header-section']}>
            <h2 className={ProductAdminStyles['main-name']}>Measures (2024)</h2>

            <AclButton variant="text">
              View Activity Log
              <AclIcon className={ProductAdminStyles['icon-view-activity']} src={MeasureViewIcon} />
            </AclButton>
          </div>

          <div className={ProductAdminStyles['inner-container']}>
            <div className={ProductAdminStyles['sidepanel-section']}>
              <ProductAdminSidePanel
                categories={getCategories()}
                onCategoryClick={handleCategoryClick}
                selectedCategory={selectedCategory}
              />
            </div>

            <div className={ProductAdminStyles['content-section']} onScroll={handleScroll}>
              <div className={ProductAdminStyles['header-container']}>
                <div className={ProductAdminStyles['header-left']}>
                  <h3>Category: {selectedCategory}</h3>
                  <AclIcon src={EditIcon} />
                  <span>Rename Category</span>
                </div>

                <div>
                  <AclButton variant="outlined" onClick={handleOpenModal}>
                    + Add Measure
                  </AclButton>
                </div>
              </div>

              <div className={ProductAdminStyles['content-body-section']}>
                {visibleData.map((measure) => (
                  <div key={measure.measureId} className={ProductAdminStyles['content-container']}>
                    <ProductAdminMeasure
                      expanded={accordionExpanded?.[measure.measureId] ?? false}
                      onChange={handleAccordionChange(measure.measureId)}
                      measure={measure}
                      onEditClick={() => handleEditClick(measure)}
                      readOnly={readOnlyStatuses[measure.measureId] ?? true}
                    />
                  </div>
                ))}

                {loadingMore && <AclSpinner />}
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ProductAdminEditMeasure
          measure={selectedMeasure}
          isEdit={isEdit}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProductAdmin;
