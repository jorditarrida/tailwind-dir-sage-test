@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.alert')
    <button id="dir-switch" class="py-2 px-4 bg-red-500 text-white">
      Change document dir
    </button>
  @endwhile
@endsection
