import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

interface Cafe {
  name: string;
  location: string;
  category: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  sortField: string = ''; // Currently sorted field
  sortOrder: 'asc' | 'desc' = 'asc';


  data: Cafe[] = [
    { name: 'Central Perk', location: 'New York City, USA', category: 'Coffee Shop' },
    { name: 'The Grind', location: 'London, UK', category: 'Coffee Shop' },
    { name: 'Cafe Du Monde', location: 'New Orleans, USA', category: 'Cafe' },
    { name: 'Central Perk', location: 'New York City, USA', category: 'Coffee Shop' },
    { name: 'The Grind', location: 'London, UK', category: 'Coffee Shop' },
    { name: 'Cafe Du Monde', location: 'New Orleans, USA', category: 'Cafe' },
    { name: 'Central Perk', location: 'New York City, USA', category: 'Coffee Shop' },
    { name: 'The Grind', location: 'London, UK', category: 'Coffee Shop' },
    { name: 'Cafe Du Monde', location: 'New Orleans, USA', category: 'Cafe' },
    { name: 'Central Perk', location: 'New York City, USA', category: 'Coffee Shop' },
    { name: 'The Grind', location: 'London, UK', category: 'Coffee Shop' },
    { name: 'Cafe Du Monde', location: 'New Orleans, USA', category: 'Cafe' },
  ];

  displayedColumns: string[] = ['name', 'location', 'category'];
  currentPage: number = 1;
  pageSize: number = 10;
  filteredData: any[] = this.data;
  searchQuery: string = '';

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  search() {
    this.filteredData = this.data.filter(row => {
      const searchText = this.searchQuery.toLowerCase();
      return row.name.toLowerCase().includes(searchText) ||
        row.location.toLowerCase().includes(searchText) ||
        row.category.toLowerCase().includes(searchText);
    });
    this.currentPage = 1; // Reset page on search
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  onSort(field: string, order: 'asc' | 'desc' = 'asc') {
    console.log('Sorting by:', field, order);
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = order;
    }
    const sortedData = this.filteredData.slice().sort((a, b) => {
      const sortValue = a[field] < b[field] ? -1 : 1;
      return this.sortOrder === 'asc' ? sortValue : -sortValue;
    });

    this.filteredData = sortedData;
    this.cdRef.markForCheck();
  }

  changePageSize(){
    const selectedPageSize = parseInt((document.querySelector('.page-size-box') as HTMLSelectElement).value);
    this.pageSize = selectedPageSize;
    this.currentPage = 1;
    console.log(selectedPageSize);
    this.totalPages;
  }
}